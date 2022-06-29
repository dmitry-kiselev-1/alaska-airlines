export class GetFlightsModel {
  flights: [
    flightDetails: {
      operatingFlightNumber: string | undefined;
      flightLegs: [
        scheduledDateTimeUTC: {
          out: string | undefined;
          in: string | undefined;
        }
      ];
    },
    actionResult: {
      code: number;
      messages: [];
    }
  ];
}
