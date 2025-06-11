import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // ✅ Add this method inside the component
  onSubmit() {
  if (this.signupForm.valid) {
    const headers = { 'Content-Type': 'application/json' };

    this.http.post('http://192.168.0.105:8081/api/signup', this.signupForm.value, {
      headers,
      responseType: 'text' // important since Go backend returns plain text
    }).subscribe({
      next: (res) => {
        alert('✅ Signup successful!');
        console.log('Response:', res);
      },
      error: (err) => {
        console.error('Signup error:', err);

        let message = 'Unknown error';
        if (err.error) {
          if (typeof err.error === 'string') {
            try {
              const parsed = JSON.parse(err.error);
              message = parsed.message || message;
            } catch {
              message = err.error;
            }
          } else if (typeof err.error === 'object') {
            message = err.error.message || message;
          }
        }

        alert('❌ Signup failed: ' + message);
      }
    });
  }
}}