import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorganismeComponent } from './createorganisme.component';

describe('CreateorganismeComponent', () => {
  let component: CreateorganismeComponent;
  let fixture: ComponentFixture<CreateorganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorganismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
