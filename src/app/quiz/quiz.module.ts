import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QuizComponent, AnswerComponent, QuestionComponent],
  providers: [QuizService],
})
export class QuizModule {}
