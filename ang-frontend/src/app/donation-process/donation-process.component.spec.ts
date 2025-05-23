import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationProcessComponent } from './donation-process.component';

describe('DonationProcessComponent', () => {
  let component: DonationProcessComponent;
  let fixture: ComponentFixture<DonationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
