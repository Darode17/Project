import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blooddonation',
  imports: [CommonModule,FormsModule],
  templateUrl: './blooddonation.component.html',
  styleUrl: './blooddonation.component.css'
})
export class BlooddonationComponent {
  bloodTypes: string[] = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];
  selectedType: string = 'AB+';

  compatibilityMap: {
    [key: string]: { receive: string[]; give: string[] }
  } = {
      'A+': { receive: ['A+', 'A-', 'O+', 'O-'], give: ['A+', 'AB+'] },
      'O+': { receive: ['O+', 'O-'], give: ['O+', 'A+', 'B+', 'AB+'] },
      'B+': { receive: ['B+', 'B-', 'O+', 'O-'], give: ['B+', 'AB+'] },
      'AB+': { receive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], give: ['AB+'] },
      'A-': { receive: ['A-', 'O-'], give: ['A+', 'A-', 'AB+', 'AB-'] },
      'O-': { receive: ['O-'], give: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
      'B-': { receive: ['B-', 'O-'], give: ['B+', 'B-', 'AB+', 'AB-'] },
      'AB-': { receive: ['A-', 'B-', 'O-', 'AB-'], give: ['AB+', 'AB-'] },
    };

  getReceivers(): string[] {
    return this.compatibilityMap[this.selectedType]?.receive;
  }

  getDonors(): string[] {
    return this.compatibilityMap[this.selectedType]?.give;
  }

  selectType(type: string): void {
    this.selectedType = type;
  }
}


