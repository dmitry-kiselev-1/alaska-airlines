import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FlightsSearchModel } from '../../../models/flights-search.model';
import { FlightsSearchResultModel } from '../../../models/flights-search-result.model';
import { FlightsService } from '../../../services/flights.service';
import { GetFlightsModel } from '../../../models/get-flights.model';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FlightsSearchComponent {

  constructor(private flightsService: FlightsService) {}

  flights$: Observable<FlightsSearchResultModel[]>;

  flightsSearchModel = new FlightsSearchModel();
  flightsSearchResultModel = new Array<FlightsSearchResultModel>();

  dateRangeFormGroup = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onOriginCodeSelected(code: string) {
    this.flightsSearchModel.origin = code;
  }

  onDestinationCodeSelected(code: string) {
    this.flightsSearchModel.destination = code;
  }

  async onGetFlightsButtonClick() {
    this.flightsSearchModel.fromDate = this.dateRangeFormGroup.value?.start?.toISOString()?.split("T")[0];
    this.flightsSearchModel.toDate = this.dateRangeFormGroup.value?.end?.toISOString()?.split("T")[0];

    console.log(this.flightsSearchModel);

    const flights = await this.flightsService.getFlights(this.flightsSearchModel).toPromise() as GetFlightsModel;

    this.flightsSearchResultModel = [
      { FlightNumber: '1', DepartureTime: '2021-07-25', ArrivalTime: '2021-07-26' },
      { FlightNumber: '2', DepartureTime: '2021-07-27', ArrivalTime: '2021-07-28' },
      { FlightNumber: '3', DepartureTime: '2021-07-29', ArrivalTime: '2021-07-30' }
    ];

  }
}
