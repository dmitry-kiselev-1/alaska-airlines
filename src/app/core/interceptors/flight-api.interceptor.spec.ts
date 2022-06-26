import { TestBed } from '@angular/core/testing';

import { FlightApiInterceptor } from './flight-api.interceptor';

describe('ApikeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FlightApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FlightApiInterceptor = TestBed.inject(FlightApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
