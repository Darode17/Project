import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-donor-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './donor-signup.component.html',
  styleUrls: ['./donor-signup.component.css']
})
export class DonorSignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    // TODO: Send form data to backend
  }
}