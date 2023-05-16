import { Component } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  questionsLength$: Observable<number>;
  currentQuestionIndex$: Observable<number>;
  showResults$: Observable<boolean>;
  correctAnswerCount$: Observable<number>;
  isDisabled$: Observable<boolean>;

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToChild() {
    this.eventsSubject.next();
  }

  constructor(private quizService: QuizService) {
    this.questionsLength$ = this.quizService.state$.pipe(
      map((state) => state.questions.length)
    );
    this.currentQuestionIndex$ = this.quizService.state$.pipe(
      map((state) => state.currentQuestionIndex + 1)
    );
    this.showResults$ = this.quizService.state$.pipe(
      map((state) => state.showResults)
    );
    this.correctAnswerCount$ = this.quizService.state$.pipe(
      map((state) => state.correctAnswerCount)
    );
    this.isDisabled$ = this.quizService.state$.pipe(
      map((state) => state.isButtonDisabled)
    );
  }

  nextQuestion(): void {
    this.emitEventToChild();
    this.quizService.nextQuestion();
  }

  restart(): void {
    this.quizService.restart();
  }
}
