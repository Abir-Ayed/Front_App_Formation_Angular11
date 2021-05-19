import { TestBed } from '@angular/core/testing';

import { SessionformationService } from './sessionformation.service';

describe('SessionformationService', () => {
  let service: SessionformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
