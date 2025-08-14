export type QuizOption = {
  label: string;
  value: "yes" | "sometimes" | "no";
  score: number;
};

export type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

export type QuestionsResponse = {
  title: string;
  intro: string;
  questions: QuizQuestion[];
};
