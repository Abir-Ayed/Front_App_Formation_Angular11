import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformateurComponent } from './listformateur.component';

describe('ListformateurComponent', () => {
  let component: ListformateurComponent;
  let fixture: ComponentFixture<ListformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
