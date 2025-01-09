import { TestBed } from '@angular/core/testing';

import { FlipkartApiserviceService } from './flipkart-apiservice.service';

describe('FlipkartApiserviceService', () => {
  let service: FlipkartApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
