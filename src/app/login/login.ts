import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://192.168.0.105:8081/api/login', this.loginForm.value, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            alert('✅ Login successful!');
          },
          error: (err) => {
            let msg = '❌ Unknown error';
            if (typeof err.error === 'string') {
              msg = err.error;
            } else if (err.error?.message) {
              msg = err.error.message;
            }
            alert('Login failed: ' + msg);
          }
        });
    } else {
      alert('Please fill out all fields.');
    }
  }
}