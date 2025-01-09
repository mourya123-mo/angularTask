import { TestBed } from '@angular/core/testing';

import { ApplicationBlogService } from './application-blog.service';

describe('ApplicationBlogService', () => {
  let service: ApplicationBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
