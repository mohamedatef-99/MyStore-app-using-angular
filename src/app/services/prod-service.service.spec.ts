import { TestBed } from '@angular/core/testing';

import { ProdServiceService } from './prod-service.service';

describe('ProdServiceService', () => {
  let service: ProdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
