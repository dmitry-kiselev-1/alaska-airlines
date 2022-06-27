// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'd33e20e22fd84286a3001aef8659c74a',
  flightsApiEndpoint: 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights',
  flightsApiHealthCheckEndpoint: 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/ping',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
