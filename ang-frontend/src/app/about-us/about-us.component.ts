import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  showMore = false;

  constructor(private router: Router) { } // Inject the Router

  toggleReadMore() {
    this.router.navigate(['/pulse-point-details']); // Navigate to the new component
  }
}
