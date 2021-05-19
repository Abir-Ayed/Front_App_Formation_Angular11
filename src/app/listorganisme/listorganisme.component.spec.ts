import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorganismeComponent } from './listorganisme.component';

describe('ListorganismeComponent', () => {
  let component: ListorganismeComponent;
  let fixture: ComponentFixture<ListorganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorganismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
