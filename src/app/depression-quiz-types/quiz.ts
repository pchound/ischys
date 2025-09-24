export type QuizOption = {
  label: string;
  value: "Not at all" | "Several days" | "More than half the days" | "Nearly every day" ;
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
