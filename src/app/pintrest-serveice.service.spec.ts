import { TestBed } from '@angular/core/testing';

import { PintrestServeiceService } from './pintrest-serveice.service';

describe('PintrestServeiceService', () => {
  let service: PintrestServeiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PintrestServeiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
