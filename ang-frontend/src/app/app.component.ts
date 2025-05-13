import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { EventandcollaborationComponent } from './eventandcollaboration/eventandcollaboration.component';
import { ImageCarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ServicesComponent, BlooddonationComponent, EventandcollaborationComponent, ImageCarouselComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
