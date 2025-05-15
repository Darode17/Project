// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-donor-signup',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './donor-signup.component.html',
//   styleUrls: ['./donor-signup.component.css']
// })
// export class DonorSignupComponent implements OnInit {
//   registerForm!: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router) { }

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       fullName: ['', Validators.required],
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')
//         ]
//       ],
//       dateOfBirth: ['', [Validators.required, this.minimumAgeValidator(18)]],
//       gender: ['', Validators.required]
//     });
//   }

//   minimumAgeValidator(minAge: number) {
//     return (control: AbstractControl) => {
//       const dob = new Date(control.value);
//       const age = new Date().getFullYear() - dob.getFullYear();
//       return age >= minAge ? null : { ageInvalid: true };
//     };
//   }

//   get dateOfBirth() {
//     return this.registerForm.get('dateOfBirth');
//   }

//   onSubmit(): void {
//     console.log('onSubmit() called!');
//     if (this.registerForm.invalid) {
//       console.log('Form is invalid:', this.registerForm.errors);
//       return;
//     }

//     console.log('Registration successful:', this.registerForm.value);

//     Swal.fire({
//       icon: 'success',
//       title: 'Signup Successful!',
//       text: 'You have successfully created an account.',
//       timer: 1500,
//       showConfirmButton: false,
//     }).then(() => {
//       this.router.navigate(['/login']);
//     });

//     this.registerForm.reset();
//   }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donor-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './donor-signup.component.html',
  styleUrls: ['./donor-signup.component.css']
})
export class DonorSignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { } // Inject the Router

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')
        ]
      ],
      dateOfBirth: ['', [Validators.required, this.minimumAgeValidator(18)]],
      gender: ['', Validators.required]
    });
  }

  minimumAgeValidator(minAge: number) {
    return (control: AbstractControl) => {
      const dob = new Date(control.value);
      const age = new Date().getFullYear() - dob.getFullYear();
      return age >= minAge ? null : { ageInvalid: true };
    };
  }

  get dateOfBirth() {
    return this.registerForm.get('dateOfBirth');
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;
    console.log('Registration successful:', this.registerForm.value);

    Swal.fire({
      icon: 'success',
      title: 'Signup Successful!',
      text: 'You have successfully created an account.',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      this.router.navigate(['/Home']); // Ensure the path matches your route definition
    });

    this.registerForm.reset();
  }
}