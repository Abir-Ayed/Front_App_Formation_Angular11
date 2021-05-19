import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSessionFormationComponent } from './details-session-formation.component';

describe('DetailsSessionFormationComponent', () => {
  let component: DetailsSessionFormationComponent;
  let fixture: ComponentFixture<DetailsSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSessionFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
