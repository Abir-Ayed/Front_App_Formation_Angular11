import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaysComponent } from './updatepays.component';

describe('UpdatepaysComponent', () => {
  let component: UpdatepaysComponent;
  let fixture: ComponentFixture<UpdatepaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
