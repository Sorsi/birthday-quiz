import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { welcomeText } from '../../welcome-text';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  welcomeText: string = '';
  buttonText: string = 'START';

  constructor(private router: Router) {
    this.welcomeText = welcomeText;
  }

  startQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
