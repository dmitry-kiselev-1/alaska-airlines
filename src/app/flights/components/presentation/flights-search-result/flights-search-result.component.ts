import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FlightsSearchResultModel } from '../../../models/flights-search-result.model';

@Component({
  selector: 'app-flights-search-result',
  templateUrl: './flights-search-result.component.html',
  styleUrls: ['./flights-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsSearchResultComponent {
  @Input() data: FlightsSearchResultModel[] =
    new Array<FlightsSearchResultModel>();

  displayedColumns: string[] = ['FlightNumber', 'DepartureTime', 'ArrivalTime'];
}
