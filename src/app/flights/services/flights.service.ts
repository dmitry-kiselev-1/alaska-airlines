import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, flatMap, Observable, tap, toArray } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from '../../shared/services/base-http.service';
import { FlightsSearchResultModel } from '../models/flights-search-result.model';
import { FlightsSearchModel } from '../models/flights-search.model';
import { GetFlightsModel } from '../models/get-flights.model';
import { map } from 'rxjs/operators';

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

  /**
   * Take SearchModel and return SearchResultModel[]
   * Query example: 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/?fromDate=2021-07-25&toDate=2021-07-25&origin=SEA&destination=LAX&nonStopOnly=false'
   */
  public async getFlights(model: FlightsSearchModel): Promise<FlightsSearchResultModel[]> {
    const query = `${environment.flightsApiEndpoint}/?fromDate=${model.fromDate}&toDate=${model.toDate}&origin=${model.origin}&destination=${model.destination}&nonStopOnly=false`;

    const getFlightsModel = await firstValueFrom<GetFlightsModel>(
      this.http.get<any>(environment.useFlightsApiEndpointJson ? "./assets/flights.json" : query)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError)
      ));

    const result: FlightsSearchResultModel[] = getFlightsModel.flights
      .reduce((accumulator: any[], curent: any) => [
        ...accumulator,
        {
          FlightNumber: curent.flightDetails.operatingFlightNumber,
          DepartureTime: curent.flightDetails.flightLegs[0].scheduledDateTimeUTC.in,
          ArrivalTime: curent.flightDetails.flightLegs[0].scheduledDateTimeUTC.out,
        }
        ], []);

    return result;
  }

}
