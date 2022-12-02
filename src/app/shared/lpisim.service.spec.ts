import { TestBed } from '@angular/core/testing';

import { LPIsimService } from './lpisim.service';

describe('LPIsimService', () => {
  let service: LPIsimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LPIsimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
