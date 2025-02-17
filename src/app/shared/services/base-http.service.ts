import { NEVER, Observable, throwError } from 'rxjs';

export abstract class BaseHttpService {
  protected handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    /*
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body?.error} || ${err.error?.message}`;
    }
     */
    console.error(err);
    return NEVER;
    //return throwError(() => new Error(errorMessage));
  }
}
