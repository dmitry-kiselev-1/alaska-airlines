import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportCodeTypeAheadComponent } from './airport-code-type-ahead.component';

describe('AirportCodeTypeAheadComponent', () => {
  let component: AirportCodeTypeAheadComponent;
  let fixture: ComponentFixture<AirportCodeTypeAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirportCodeTypeAheadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirportCodeTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
