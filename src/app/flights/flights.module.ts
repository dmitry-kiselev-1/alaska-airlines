import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './components/smart/flights-search/flights-search.component';
import { FlightsSearchResultComponent } from './components/presentation/flights-search-result/flights-search-result.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsHealthCheckComponent } from './components/smart/flights-health-check/flights-health-check.component';


@NgModule({
  declarations: [
    FlightsSearchComponent,
    FlightsSearchResultComponent,
    FlightsHealthCheckComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
