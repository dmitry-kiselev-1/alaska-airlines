import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from '../../../services/flights.service';

@Component({
  selector: 'app-flights-health-check',
  templateUrl: './flights-health-check.component.html',
  styleUrls: ['./flights-health-check.component.scss']
})
export class FlightsHealthCheckComponent implements OnInit {
  healthPing: Observable<string>;

  constructor(private flightService: FlightsService) {

  }

  ngOnInit(): void {
    this.healthPing = this.flightService.getHealthPing();
  }

}
