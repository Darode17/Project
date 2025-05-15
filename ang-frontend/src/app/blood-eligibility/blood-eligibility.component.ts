import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-blood-eligibility',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './blood-eligibility.component.html',
  styleUrls: ['./blood-eligibility.component.css']
})

export class BloodEligibilityComponent {
  eligibilityForm: FormGroup;
  submitted = false;
  isEligible: boolean | null = null;

  diseaseList: string[] = [
    'Hepatitis B',
    'Hepatitis C',
    'Cancer',
    'Tuberculosis',
    'None of the above'
  ];

  constructor(private fb: FormBuilder) {
    this.eligibilityForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      weight: ['', [Validators.required, Validators.min(50)]],
      diseases: this.fb.array([], Validators.required)
    });
  }

  onCheckboxChange(event: any) {
    const diseases: FormArray = this.eligibilityForm.get('diseases') as FormArray;
    if (event.target.checked) {
      diseases.push(this.fb.control(event.target.value));
    } else {
      const index = diseases.controls.findIndex(x => x.value === event.target.value);
      if (index !== -1) diseases.removeAt(index);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.eligibilityForm.invalid) {
      this.isEligible = null;
      return;
    }

    const selectedDiseases = this.eligibilityForm.value.diseases;
    const disqualifyingDiseases = ['Hepatitis B', 'Hepatitis C', 'Cancer', 'Tuberculosis'];

    this.isEligible = !selectedDiseases.some((disease: string) => disqualifyingDiseases.includes(disease));
  }
}