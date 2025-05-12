import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForBloodComponent } from './looking-for-blood.component';

describe('LookingForBloodComponent', () => {
  let component: LookingForBloodComponent;
  let fixture: ComponentFixture<LookingForBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookingForBloodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingForBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
