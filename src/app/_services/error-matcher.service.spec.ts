import { TestBed } from '@angular/core/testing';

import { ErrorMatcherService } from './error-matcher.service';

describe('ErrorMatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorMatcherService = TestBed.get(ErrorMatcherService);
    expect(service).toBeTruthy();
  });
});
