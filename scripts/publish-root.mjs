import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");
const distDir = resolve(rootDir, "dist");
const distAssetsDir = resolve(distDir, "assets");
const distBuildSentenceDir = resolve(distDir, "build-sentence");
const rootAssetsDir = resolve(rootDir, "assets");
const rootBuildSentenceDir = resolve(rootDir, "build-sentence");

await rm(resolve(rootDir, "index.html"), { force: true });
await rm(rootAssetsDir, { recursive: true, force: true });
await rm(rootBuildSentenceDir, { recursive: true, force: true });

await cp(resolve(distDir, "index.html"), resolve(rootDir, "index.html"));
await mkdir(rootAssetsDir, { recursive: true });
await cp(distAssetsDir, rootAssetsDir, { recursive: true });
await cp(distBuildSentenceDir, rootBuildSentenceDir, { recursive: true });
await writeFile(resolve(rootDir, ".nojekyll"), "");
