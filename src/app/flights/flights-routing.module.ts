import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsSearchComponent } from './components/smart/flights-search/flights-search.component';

const routes: Routes = [
  { path: '', component: FlightsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule {}
