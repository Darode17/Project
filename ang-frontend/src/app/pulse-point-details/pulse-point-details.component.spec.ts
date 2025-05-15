import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsePointDetailsComponent } from './pulse-point-details.component';

describe('PulsePointDetailsComponent', () => {
  let component: PulsePointDetailsComponent;
  let fixture: ComponentFixture<PulsePointDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulsePointDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulsePointDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
