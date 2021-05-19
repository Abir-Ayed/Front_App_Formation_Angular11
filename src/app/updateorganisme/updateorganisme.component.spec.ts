import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorganismeComponent } from './updateorganisme.component';

describe('UpdateorganismeComponent', () => {
  let component: UpdateorganismeComponent;
  let fixture: ComponentFixture<UpdateorganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateorganismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
