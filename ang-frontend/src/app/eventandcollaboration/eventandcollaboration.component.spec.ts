import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventandcollaborationComponent } from './eventandcollaboration.component';

describe('EventandcollaborationComponent', () => {
  let component: EventandcollaborationComponent;
  let fixture: ComponentFixture<EventandcollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventandcollaborationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventandcollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
