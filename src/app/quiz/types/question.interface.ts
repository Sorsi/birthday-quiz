import { Answer } from './answer.type';

export interface Question {
  question: string;
  incorrectAnswers?: Answer[];
  correctAnswer: Answer;
  type: QuestionType;
}

export type QuestionType = 'choice' | 'input';
