import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodEligibilityComponent } from './blood-eligibility.component';

describe('BloodEligibilityComponent', () => {
  let component: BloodEligibilityComponent;
  let fixture: ComponentFixture<BloodEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodEligibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
