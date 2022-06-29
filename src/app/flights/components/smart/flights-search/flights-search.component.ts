import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlightsSearchModel } from '../../../models/flights-search.model';
import { FlightsSearchResultModel } from '../../../models/flights-search-result.model';
import { FlightsService } from '../../../services/flights.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsSearchComponent {
  flightsSearchModel = new FlightsSearchModel();
  flightsSearchResultModel = new Array<FlightsSearchResultModel>();
  dateRangeFormGroup = new FormGroup({
    start: new FormControl<Date | null>(new Date(), Validators.required),
    end: new FormControl<Date | null>(new Date(), Validators.required),
  });

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private flightsService: FlightsService
  ) {}

  onOriginCodeSelected(code: string) {
    this.flightsSearchModel.origin = code;
  }

  onDestinationCodeSelected(code: string) {
    this.flightsSearchModel.destination = code;
  }

  originInvalid: boolean = false;
  onOriginValidationChanged(invalid: boolean) {
    this.originInvalid = invalid;
  }

  destinationInvalid: boolean = false;
  onDestinationValidationChanged(invalid: boolean) {
    this.destinationInvalid = invalid;
  }

  async onGetFlightsButtonClick() {
    this.flightsSearchModel.fromDate = this.dateRangeFormGroup.value?.start
      ?.toISOString()
      ?.split('T')[0];
    this.flightsSearchModel.toDate = this.dateRangeFormGroup.value?.end
      ?.toISOString()
      ?.split('T')[0];
    if (!environment.production) {
      console.log(this.flightsSearchModel);
    }
    const flights = await this.flightsService.getFlights(
      this.flightsSearchModel
    );
    this.flightsSearchResultModel = flights;

    this.changeDetectorRef.detectChanges();
  }
}
