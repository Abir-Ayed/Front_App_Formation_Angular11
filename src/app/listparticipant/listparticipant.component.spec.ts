import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListparticipantComponent } from './listparticipant.component';

describe('ListparticipantComponent', () => {
  let component: ListparticipantComponent;
  let fixture: ComponentFixture<ListparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListparticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
