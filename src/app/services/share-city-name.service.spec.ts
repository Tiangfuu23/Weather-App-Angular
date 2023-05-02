import { TestBed } from '@angular/core/testing';

import { ShareCityNameService } from './share-city-name.service';

describe('ShareCityNameService', () => {
  let service: ShareCityNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCityNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
