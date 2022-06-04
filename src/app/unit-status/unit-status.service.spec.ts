import { TestBed } from '@angular/core/testing';

import { UnitStatusService } from './unit-status.service';

describe('UnitStatusService', () => {
  let service: UnitStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
