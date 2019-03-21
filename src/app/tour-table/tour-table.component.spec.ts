import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTableComponent } from './tour-table.component';

describe('TourTableComponent', () => {
  let component: TourTableComponent;
  let fixture: ComponentFixture<TourTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
