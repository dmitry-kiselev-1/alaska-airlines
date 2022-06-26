import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FlightApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // intercept specific api calls only
    if(!request.url.startsWith(environment.flightsApiEndpoint))
      return next.handle(request);

    // the auth token from the service / environment / etc...
    const token = environment.apiKey;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const requestUpdated = request.clone({
      headers: request.headers.set('Ocp-Apim-Subscription-Key', token)
    });

    return next.handle(requestUpdated);
  }
}
