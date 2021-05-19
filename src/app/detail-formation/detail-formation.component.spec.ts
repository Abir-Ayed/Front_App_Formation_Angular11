import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormationComponent } from './detail-formation.component';

describe('DetailFormationComponent', () => {
  let component: DetailFormationComponent;
  let fixture: ComponentFixture<DetailFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
