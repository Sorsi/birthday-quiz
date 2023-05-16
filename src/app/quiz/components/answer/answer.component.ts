import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Answer } from '../../types/answer.type';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './answer.component.html',
})
export class AnswerComponent implements OnInit {
  @Input('answerText') answerTextProps!: string;
  @Input('index') indexProps!: number;
  @Input('correctAnswer') correctAnswer!: Answer | null;
  @Input('currentAnswer') currentAnswer!: Answer | null;

  @Output('selectAnswer') selectAnswerEvent = new EventEmitter<string>();
  @HostListener('click', ['$event'])
  onClick() {
    this.selectAnswerEvent.emit(this.answerTextProps);
  }

  letterMapping = ['A', 'B', 'C', 'D'];

  ngOnInit(): void {
    if (!this.answerTextProps || this.indexProps === undefined) {
      throw new Error('Inputs in answer are not correct!');
    }
  }
}
