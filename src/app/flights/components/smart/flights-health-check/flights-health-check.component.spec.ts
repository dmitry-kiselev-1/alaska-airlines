import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsHealthCheckComponent } from './flights-health-check.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightsService } from '../../../services/flights.service';

describe('FlightsHealthCheckComponent', () => {
  let component: FlightsHealthCheckComponent;
  let fixture: ComponentFixture<FlightsHealthCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService],
      declarations: [FlightsHealthCheckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsHealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
