import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    '\worlddonarday.jpg',
    '\give-blood-2.png',
    '\give-blood-2.png'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    // Start auto-sliding every 3 seconds
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy(): void {
    // Clear the interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
