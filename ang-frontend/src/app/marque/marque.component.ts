import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marque',
  imports: [CommonModule,FormsModule],
  templateUrl: './marque.component.html',
  styleUrl: './marque.component.css'
})
export class MarqueComponent {
  infoCards = [
    {
      icon: '\image copy.png',
      title: 'It takes only an hour',
      subtitle: 'Donate blood save lives!'
    },
    {
      icon: '\images.png',
      title: 'You will get free refreshments after donation',
      subtitle: 'Donation of blood is safe and healthy'
    },
    {
      icon: '\png-transparent-indian-rupee-sign-computer-icons-money-india-text-investment-payment.png',
      title: 'It costs nothing',
      subtitle: 'Give blood and stay healthy'
    },
    {
      icon: '\heart.png',
      title: 'There is no substitute for blood',
      subtitle: 'Every drop counts'
    }
    // Add more cards if needed
  ];
}
