import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
W = "{%s}" % NS["w"]


def paragraphs(path):
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    rows = []
    for paragraph in root.findall(".//w:body/w:p", NS):
        text = "".join(node.text or "" for node in paragraph.findall(".//w:t", NS)).strip()
        if not text:
            continue
        style_node = paragraph.find("./w:pPr/w:pStyle", NS)
        style = style_node.get(W + "val") if style_node is not None else ""
        rows.append({"style": style, "text": text})
    return rows


def clean_bullet(text):
    return re.sub(r"^[l•·▪●\-]\s*", "", text).strip()


def clean_title(text):
    return re.sub(r"^(?:TPO|ZPO)?\d+(?:-\d+)?\s*", "", text, flags=re.I).strip(" :-")


def is_count_heading(text):
    return bool(re.search(r"\d+\s*题\s*$", text))


def extract_email(path):
    rows = paragraphs(path)
    start_indexes = [i for i, row in enumerate(rows) if row["text"].strip() == "按照情景分类"]
    start = start_indexes[-1] + 1 if start_indexes else 0
    rows = rows[start:]
    primary = "其他"
    secondary = "综合"
    questions = []
    seen = set()
    i = 0
    while i < len(rows):
        row = rows[i]
        text = row["text"]
        next_texts = [rows[j]["text"] for j in range(i + 1, min(i + 4, len(rows)))]
        looks_like_question = bool(
            row["style"]
            and i + 1 < len(rows)
            and not rows[i + 1]["style"]
            and any(t.lower().startswith(("write an email", "write and email")) for t in next_texts)
        )

        if row["style"] == "2" and is_count_heading(text) and not looks_like_question:
            primary = re.sub(r"\s*\d+\s*题\s*$", "", text).strip()
            secondary = "综合"
            i += 1
            continue
        if row["style"] == "3" and is_count_heading(text) and not looks_like_question:
            secondary = re.sub(r"\s*\d+\s*题\s*$", "", text).strip()
            i += 1
            continue
        if not looks_like_question:
            i += 1
            continue

        title = text
        j = i + 1
        context_parts = []
        while j < len(rows) and not rows[j]["text"].lower().startswith(("write an email", "write and email")):
            if rows[j]["style"]:
                break
            context_parts.append(rows[j]["text"])
            j += 1
        if j >= len(rows) or not rows[j]["text"].lower().startswith(("write an email", "write and email")):
            i += 1
            continue

        instruction = rows[j]["text"]
        j += 1
        bullets = []
        while j < len(rows):
            current = rows[j]["text"]
            lower = current.lower()
            if lower.startswith("write as much") or lower.startswith("your response") or lower.startswith("your response"):
                j += 1
                break
            if rows[j]["style"]:
                break
            bullets.append(clean_bullet(current))
            j += 1

        to = ""
        subject = ""
        while j < len(rows) and not rows[j]["style"]:
            current = rows[j]["text"]
            if current.lower().startswith("to:"):
                to = current.split(":", 1)[1].strip()
            elif current.lower().startswith("subject:"):
                subject = current.split(":", 1)[1].strip()
            j += 1

        context = " ".join(context_parts).strip()
        key = re.sub(r"\W+", "", title + context).lower()
        if context and len(bullets) >= 2 and key not in seen:
            seen.add(key)
            questions.append({
                "id": f"email-{len(questions) + 1:02d}",
                "code": title,
                "title": clean_title(title),
                "category": primary,
                "subcategory": secondary,
                "context": context,
                "instruction": instruction,
                "bullets": bullets,
                "to": to,
                "subject": subject,
                "minutes": 7,
            })
        i = max(j, i + 1)
    return questions


SPEAKER_RE = re.compile(r"^(Dr\.?\s+[A-Za-z]+|Doctor\s+[A-Za-z]+|Claire|Paul|Kelly|Andrew)\s*:?[ ]*(.*)$", re.I)


def split_posts(lines):
    posts = []
    pending_name = ""
    for line in lines:
        match = SPEAKER_RE.match(line.strip())
        if match:
            name = match.group(1).strip().replace("Doctor ", "Dr. ")
            content = match.group(2).strip()
            if content:
                posts.append({"name": name, "text": content})
                pending_name = ""
            else:
                pending_name = name
            continue
        if pending_name:
            posts.append({"name": pending_name, "text": line.strip()})
            pending_name = ""
        elif posts:
            posts[-1]["text"] += " " + line.strip()
    return [post for post in posts if post["text"]]


def extract_academic(path):
    rows = paragraphs(path)
    category = "其他"
    questions = []
    seen = set()
    i = 0
    while i < len(rows):
        row = rows[i]
        if row["style"] == "2" and is_count_heading(row["text"]):
            category = re.sub(r"\s*\d+\s*题\s*$", "", row["text"]).strip()
            i += 1
            continue
        if row["style"] != "3":
            i += 1
            continue

        title = row["text"]
        if "开放类型" in title or "封闭类型" in title:
            i += 1
            continue
        subtype = "综合"
        j = i + 1
        if j < len(rows) and rows[j]["style"] == "4":
            subtype_raw = rows[j]["text"]
            subtype = "开放式" if "开放" in subtype_raw else "封闭式"
            j += 1
        content_lines = []
        while j < len(rows) and not rows[j]["style"]:
            content_lines.append(rows[j]["text"])
            j += 1
        posts = split_posts(content_lines)
        key = re.sub(r"\W+", "", title + (posts[0]["text"] if posts else "")).lower()
        if len(posts) >= 3 and key not in seen:
            seen.add(key)
            questions.append({
                "id": f"academic-{len(questions) + 1:02d}",
                "code": title,
                "title": clean_title(title),
                "category": category,
                "discussionType": subtype,
                "professor": posts[0],
                "students": posts[1:3],
                "minutes": 10,
            })
        i = max(j, i + 1)
    return questions


def main():
    if len(sys.argv) != 4:
        raise SystemExit("usage: extract-writing-banks.py EMAIL.docx ACADEMIC.docx OUTPUT.json")
    data = {
        "email": extract_email(sys.argv[1]),
        "academic": extract_academic(sys.argv[2]),
    }
    output = Path(sys.argv[3])
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"email={len(data['email'])} academic={len(data['academic'])} output={output}")


if __name__ == "__main__":
    main()
