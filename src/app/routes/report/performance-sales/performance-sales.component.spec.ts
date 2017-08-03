import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSalesComponent } from './performance-sales.component';

describe('PerformanceSalesComponent', () => {
  let component: PerformanceSalesComponent;
  let fixture: ComponentFixture<PerformanceSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
