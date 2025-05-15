import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciverSignupComponent } from './reciver-signup.component';

describe('ReciverSignupComponent', () => {
  let component: ReciverSignupComponent;
  let fixture: ComponentFixture<ReciverSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciverSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciverSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
