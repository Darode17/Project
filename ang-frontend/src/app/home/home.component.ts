import { Component } from '@angular/core';
import { BlooddonationComponent } from '../blooddonation/blooddonation.component';
import { EventandcollaborationComponent } from '../eventandcollaboration/eventandcollaboration.component';
import { DonationProcessComponent } from '../donation-process/donation-process.component';
import { ImageCarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { DonarLoginComponent } from '../donar-login/donar-login.component';
import { DonorSignupComponent } from '../donor-signup/donor-signup.component';
import { BloodEligibilityComponent } from '../blood-eligibility/blood-eligibility.component';
import { MarqueComponent } from '../marque/marque.component';
import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  imports: [BlooddonationComponent,AboutUsComponent, EventandcollaborationComponent, DonationProcessComponent, ImageCarouselComponent, FooterComponent, DonorSignupComponent, DonarLoginComponent, BloodEligibilityComponent, MarqueComponent,ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
