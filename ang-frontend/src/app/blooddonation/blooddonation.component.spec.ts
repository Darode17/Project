import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonationComponent } from './blooddonation.component';

describe('BlooddonationComponent', () => {
  let component: BlooddonationComponent;
  let fixture: ComponentFixture<BlooddonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlooddonationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlooddonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
