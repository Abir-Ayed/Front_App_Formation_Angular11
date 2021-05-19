import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaysComponent } from './createpays.component';

describe('CreatepaysComponent', () => {
  let component: CreatepaysComponent;
  let fixture: ComponentFixture<CreatepaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
