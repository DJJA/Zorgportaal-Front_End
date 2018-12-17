import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorClientManagerComponent } from './mentor-client-manager.component';

describe('MentorClientManagerComponent', () => {
  let component: MentorClientManagerComponent;
  let fixture: ComponentFixture<MentorClientManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorClientManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorClientManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
