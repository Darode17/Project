import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciver-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reciver-signup.component.html',
  styleUrls: ['./reciver-signup.component.css']
})
export class ReceiverSignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')
      ]],
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

  onSubmit(): void {
    if (this.signupForm.invalid) return;
    console.log('Receiver Signup:', this.signupForm.value);
    // TODO: Send form data to backend
  }

  get dateOfBirth() {
    return this.signupForm.get('dateOfBirth');
  }
}
