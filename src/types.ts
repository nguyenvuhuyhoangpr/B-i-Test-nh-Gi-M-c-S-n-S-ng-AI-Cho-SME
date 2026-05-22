export interface UserInfo {
  name: string;
  company: string;
  position: string;
  email: string;
  industry: string;
}

export type CategoryKey = "strategy" | "data" | "people" | "process";

export interface CategoryInfo {
  key: CategoryKey;
  name: string;
  description: string;
}

export interface QuestionOption {
  value: string; // "A", "B", "C", "D"
  text: string;
  score: number; // 1, 2, 3, 4
}

export interface Question {
  id: number;
  text: string;
  category: CategoryKey;
  options: QuestionOption[];
}

export interface DomainScore {
  key: CategoryKey;
  name: string;
  score: number; // 0 to 25 points scale (total max is 25 for each of the 4 domains)
  percentage: number; // 0 to 100%
  description: string;
}
