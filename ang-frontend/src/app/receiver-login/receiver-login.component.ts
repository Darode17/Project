import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciver-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './receiver-login.component.html',
  styleUrls: ['./reciver-login.component.css']
})
export class ReceiverLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    console.log('Receiver Login:', this.loginForm.value);
    // TODO: Handle login logic here
  }
}
