import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { EventandcollaborationComponent } from './eventandcollaboration/eventandcollaboration.component';
import { ImageCarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { DonationProcessComponent } from './donation-process/donation-process.component';
import { DonorSignupComponent } from './donor-signup/donor-signup.component';
import { DonarLoginComponent } from './donar-login/donar-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BloodEligibilityComponent } from './blood-eligibility/blood-eligibility.component';
import { MarqueComponent } from './marque/marque.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // imports: [NavbarComponent, RouterOutlet, ServicesComponent, AboutUsComponent, BlooddonationComponent, EventandcollaborationComponent, DonationProcessComponent, ImageCarouselComponent, FooterComponent, DonorSignupComponent, DonarLoginComponent, BloodEligibilityComponent, MarqueComponent],
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
