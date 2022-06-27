import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './components/smart/flights-search/flights-search.component';
import { FlightsSearchResultComponent } from './components/presentation/flights-search-result/flights-search-result.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsHealthCheckComponent } from './components/smart/flights-health-check/flights-health-check.component';
import { FlightsMaterialDesignModule } from './flights-material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AirportCodeTypeAheadComponent } from './components/smart/airport-code-type-ahead/airport-code-type-ahead.component';


@NgModule({
  declarations: [
    FlightsSearchComponent,
    FlightsSearchResultComponent,
    FlightsHealthCheckComponent,
    AirportCodeTypeAheadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlightsRoutingModule,
    FlightsMaterialDesignModule,
    ReactiveFormsModule,
  ]
})
export class FlightsModule {
}
