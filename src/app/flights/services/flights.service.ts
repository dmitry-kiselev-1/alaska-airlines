import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, flatMap, mergeMap, Observable, tap, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from '../../shared/services/base-http.service';
import { FlightsSearchResultModel } from '../models/flights-search-result.model';
import { FlightsSearchModel } from '../models/flights-search.model';
import { GetFlightsModel } from '../models/get-flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  public getHealthPing(): Observable<string> {
    return this.http.get<string>(environment.flightsApiHealthCheckEndpoint)
      .pipe(
        map((result: string) => result),
        catchError(this.handleError)
      );
  }

  //private flightsEndpoint: string = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/
  // ?fromDate=2021-07-25&toDate=2021-07-25&origin=SEA&destination=LAX&nonStopOnly=false';

  public getFlights(model: FlightsSearchModel): Observable<GetFlightsModel> /*FlightsSearchResultModel[]*/ {
    const query = `${environment.flightsApiEndpoint}/?fromDate=${model.fromDate}&toDate=${model.toDate}&origin=${model.origin}&destination=${model.destination}&nonStopOnly=false`;
    return this.http.get<any>(query)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError)
      );
  }

}
