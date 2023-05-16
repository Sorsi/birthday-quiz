import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { helperText } from '../../helper-text';
import { QuizService } from '../../services/quiz.service';
import { Answer } from '../../types/answer.type';
import { Question, QuestionType } from '../../types/question.interface';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  question$: Observable<Question>;
  answers$: Observable<Answer[]>;
  questionType$: Observable<QuestionType>;
  correctAnswer: Answer | null;
  currentAnswer: Answer | null;
  correctAnswerSubscription!: Subscription;
  currentAnswerSubscription!: Subscription;
  helperText: string;
  code: string;

  private eventsSubscription!: Subscription;

  @Input() events!: Observable<void>;

  constructor(private quizService: QuizService) {
    this.question$ = this.quizService.state$.pipe(
      map((state) => state.questions[state.currentQuestionIndex])
    );

    this.answers$ = this.quizService.state$.pipe(map((state) => state.answers));
    this.questionType$ = this.quizService.state$.pipe(
      map((state) => state.questionType)
    );
    this.correctAnswer = null;
    this.currentAnswer = null;
    this.helperText = helperText;
    this.code = '';
  }

  ngOnInit(): void {
    this.correctAnswerSubscription = this.question$
      .pipe(map((question) => question.correctAnswer))
      .subscribe((correctAnswer) => (this.correctAnswer = correctAnswer));
    this.currentAnswerSubscription = this.quizService.state$
      .pipe(map((state) => state.currentAnswer))
      .subscribe((currentAnswer) => (this.currentAnswer = currentAnswer));
    this.eventsSubscription = this.events.subscribe(() => this.clearInput());
  }

  clearInput() {
    this.code = '';
  }

  onInputChange(inputValue: string): void {
    this.currentAnswer = inputValue;
    this.isDisabled(this.currentAnswer);
  }

  selectAnswer(answer: Answer): void {
    this.quizService.selectAnswer(answer);
  }

  isWrongAnswer(answer: Answer): boolean {
    if (!this.currentAnswer || !this.correctAnswer) {
      return false;
    }
    return (
      this.currentAnswer === answer && this.currentAnswer !== this.correctAnswer
    );
  }

  isDisabledAnswer(): boolean {
    if (!this.currentAnswer || !this.correctAnswer) {
      return false;
    }
    return Boolean(this.currentAnswer);
  }

  isCorrectAnswer(answer: Answer): boolean {
    if (!this.currentAnswer || !this.correctAnswer) {
      return false;
    }
    return Boolean(this.currentAnswer) && answer === this.correctAnswer;
  }

  isDisabled(answer: Answer) {
    return this.quizService.isDisabled(answer);
  }

  ngOnDestroy(): void {
    this.correctAnswerSubscription.unsubscribe();
    this.currentAnswerSubscription.unsubscribe();
    this.eventsSubscription.unsubscribe();
  }
}
