import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your standalone components
import { Signup } from './auth/signup/signup';
import { Login } from './auth/login/login';
import { FeatureEvaluator } from './feature-evaluator/feature-evaluator';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from "./auth/auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
goToHome() {
throw new Error('Method not implemented.');
}
goRegistration() {
throw new Error('Method not implemented.');
}
goToLogin() {
throw new Error('Method not implemented.');
}
  title = 'My App';
  activeView: 'signup' | 'login' | 'main' = 'signup';

  // Switch views on button click
  setView(view: 'signup' | 'login' | 'main') {
    this.activeView = view;
  }

  // Callbacks from child components could be added here
  // For example, after successful signup, switch to login:
  onSignedUp() {
    this.setView('login');
  }

  onLoggedIn() {
    this.setView('main');
  }
}
