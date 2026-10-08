import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['admin@example.com', [Validators.required, Validators.email]],
      password: ['admin123', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Mock successful login
      const email = this.loginForm.value.email;
      localStorage.setItem('enquiryUser', email);
      alert('Login successful!');
      this.router.navigate(['/enquiry-list']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
