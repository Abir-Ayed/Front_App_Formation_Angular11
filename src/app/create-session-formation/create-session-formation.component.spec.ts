import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSessionFormationComponent } from './create-session-formation.component';

describe('CreateSessionFormationComponent', () => {
  let component: CreateSessionFormationComponent;
  let fixture: ComponentFixture<CreateSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSessionFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
