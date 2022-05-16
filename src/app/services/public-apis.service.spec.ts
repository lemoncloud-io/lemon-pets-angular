import { TestBed } from '@angular/core/testing';

import { PublicApisService } from './public-apis.service';

describe('PublicApisService', () => {
  let service: PublicApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
