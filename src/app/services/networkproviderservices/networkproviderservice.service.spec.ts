import { TestBed } from '@angular/core/testing';

import { NetworkproviderserviceService } from './networkproviderservice.service';

describe('NetworkproviderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkproviderserviceService = TestBed.get(NetworkproviderserviceService);
    expect(service).toBeTruthy();
  });
});
