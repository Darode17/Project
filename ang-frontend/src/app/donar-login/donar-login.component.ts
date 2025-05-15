// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-donar-login',
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './donar-login.component.html',
//   styleUrls: ['./donar-login.component.css']
// })
// export class DonarLoginComponent {
//   loginForm: FormGroup;
//   submitted = false;
//   errormessage: string = '';

//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   onSubmit(): void {
//     this.submitted = true;

//     if (this.loginForm.invalid) {
//       this.errormessage = 'Please fill in valid credentials.';
//       return;
//     }

//     console.log('Login successful:', this.loginForm.value);
//     // TODO: Replace with actual authentication logic
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-donar-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './donar-login.component.html',
  styleUrls: ['./donar-login.component.css']
})
export class DonarLoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errormessage: string = '';

  // Dummy user (replace with your actual authentication logic)
  predefinedEmail = 'test@example.com';
  predefinedPassword = 'password123';

  constructor(private fb: FormBuilder, private router: Router) { // Inject the Router
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.errormessage = 'Please fill in valid credentials.';
      return;
    }

    // Replace this with your actual authentication logic (e.g., API call)
    if (this.loginForm.value.email === this.predefinedEmail &&
      this.loginForm.value.password === this.predefinedPassword) {
      console.log('Login successful:', this.loginForm.value);
      localStorage.setItem('role', 'donor'); // Example: Setting a role

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back!',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/Account-page']); // Navigate to account page
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your email or password.',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/donor-signup']); // Navigate to signup
        }
      });
      this.loginForm.reset();
    }
  }
}