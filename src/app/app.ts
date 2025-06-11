import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your standalone components
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { FeatureEvaluator } from "./feature-evaluator/feature-evaluator";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Signup, Login, FeatureEvaluator,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
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
