import { TestBed } from '@angular/core/testing';

import { ForecastingService } from './forecasting.service';

describe('ForecastingService', () => {
  let service: ForecastingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
