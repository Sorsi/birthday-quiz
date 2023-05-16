import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizState } from '../types/quizState.interface';
import { data } from '../data';
import { Question } from '../types/question.interface';
import { Answer } from '../types/answer.type';

@Injectable()
export class QuizService {
  initialState: QuizState = {
    questions: data,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: this.shuffleAnswers(data[0]),
    questionType: data[0].type,
    currentAnswer: null,
    isButtonDisabled: false,
  };
  state$ = new BehaviorSubject<QuizState>({ ...this.initialState });

  setState(partialState: Partial<QuizState>): void {
    this.state$.next({ ...this.state$.getValue(), ...partialState });
  }

  getState(): QuizState {
    return this.state$.getValue();
  }

  restart(): void {
    this.setState(this.initialState);
  }

  // update state on next button click
  nextQuestion(): void {
    const state = this.getState();
    const newShowResults =
      state.currentQuestionIndex === state.questions.length - 1;
    const newCurrentQuestionIndex = newShowResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    const newAnsers = newShowResults
      ? []
      : this.shuffleAnswers(state.questions[newCurrentQuestionIndex]);

    this.setState({
      currentQuestionIndex: newCurrentQuestionIndex,
      showResults: newShowResults,
      answers: newAnsers,
      questionType: state.questions[newCurrentQuestionIndex].type,
      currentAnswer: null,
      isButtonDisabled:
        state.questions[newCurrentQuestionIndex].type === 'input'
          ? true
          : false,
    });
  }

  // create random order for answers if question's type is choice
  shuffleAnswers(question: Question): Answer[] {
    if (question.incorrectAnswers) {
      const unshuffledAnswers = [
        ...question.incorrectAnswers!,
        question.correctAnswer,
      ];

      return unshuffledAnswers
        .map((unshuffledAnswer) => ({
          sort: Math.random(),
          value: unshuffledAnswer,
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((el) => el.value);
    }
    return [];
  }

  selectAnswer(answer: Answer): void {
    const state = this.getState();
    const newCorrectAnswerCount =
      answer === state.questions[state.currentQuestionIndex].correctAnswer
        ? state.correctAnswerCount + 1
        : state.correctAnswerCount;
    this.setState({
      currentAnswer: answer,
      correctAnswerCount: newCorrectAnswerCount,
    });
  }

  isDisabled(answer: Answer) {
    const state = this.getState();
    const isDisabled =
      answer.toLowerCase().trim() ===
      state.questions[state.currentQuestionIndex].correctAnswer
        .toLowerCase()
        .trim()
        ? false
        : true;
    this.setState({
      isButtonDisabled: isDisabled,
    });
  }
}
