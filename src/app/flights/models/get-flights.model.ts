export class GetFlightsModel {

  "flights": [
    {
      "flightDetails": {
        "operatingFlightNumber": string | undefined,
        "scheduledFlightOriginationDateUTC": string | undefined,
        "flightLegs": [
          {
            "scheduledDepartureDateStnLocal": string | undefined
          }
        ]
      },
    }
  ]
}
