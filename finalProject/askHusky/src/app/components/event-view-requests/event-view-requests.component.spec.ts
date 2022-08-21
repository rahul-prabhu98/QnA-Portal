import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewRequestsComponent } from './event-view-requests.component';

describe('EventViewRequestsComponent', () => {
  let component: EventViewRequestsComponent;
  let fixture: ComponentFixture<EventViewRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventViewRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
