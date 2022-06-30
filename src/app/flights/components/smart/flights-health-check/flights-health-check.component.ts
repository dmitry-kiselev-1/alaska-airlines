import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from '../../../services/flights.service';

@Component({
  selector: 'app-flights-health-check',
  templateUrl: './flights-health-check.component.html',
  styleUrls: ['./flights-health-check.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsHealthCheckComponent /*implements OnInit*/ {
  flightsService = inject(FlightsService);
  healthPing$: Observable<string> = this.flightsService.getHealthPing();

  /*
  healthPing$: Observable<string>;

  constructor(private flightService: FlightsService) {
  }

  ngOnInit(): void {
    this.healthPing$ = this.flightService.getHealthPing();
  }
*/
}
