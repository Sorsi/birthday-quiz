import { Answer } from './answer.type';
import { Question, QuestionType } from './question.interface';

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  showResults: boolean;
  correctAnswerCount: number;
  answers: Answer[];
  questionType: QuestionType;
  currentAnswer: Answer | null;
  isButtonDisabled: boolean;
}
