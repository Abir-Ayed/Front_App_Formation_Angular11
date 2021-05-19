import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaysComponent } from './listpays.component';

describe('ListpaysComponent', () => {
  let component: ListpaysComponent;
  let fixture: ComponentFixture<ListpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
