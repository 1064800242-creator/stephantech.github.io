const timestampSeconds = (value) => value?.seconds ?? value?.toMillis?.() / 1000 ?? 0;

export const mergeSubmissionGrades = (documents) => {
  const gradesBySubmission = new Map();

  documents
    .filter((item) => item.type === "ai-grading" && item.parentSubmissionId)
    .forEach((grade) => {
      const existing = gradesBySubmission.get(grade.parentSubmissionId);
      const gradeTime = timestampSeconds(grade.aiGradedAt || grade.submittedAt);
      const existingTime = timestampSeconds(existing?.aiGradedAt || existing?.submittedAt);
      if (!existing || gradeTime >= existingTime) gradesBySubmission.set(grade.parentSubmissionId, grade);
    });

  return documents
    .filter((item) => item.type !== "ai-grading")
    .map((submission) => {
      const grade = gradesBySubmission.get(submission.id);
      if (!grade) return submission;
      return {
        ...submission,
        aiScore: grade.aiScore || submission.aiScore,
        aiFeedback: grade.aiFeedback || submission.aiFeedback,
        aiGradedAt: grade.aiGradedAt || submission.aiGradedAt,
      };
    });
};
