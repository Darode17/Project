import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciverLoginComponent } from './receiver-login.component';

describe('ReciverLoginComponent', () => {
  let component: ReciverLoginComponent;
  let fixture: ComponentFixture<ReciverLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciverLoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReciverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
