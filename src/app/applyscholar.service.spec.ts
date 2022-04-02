import { TestBed } from '@angular/core/testing';

import { ApplyscholarService } from './applyscholar.service';

describe('ApplyscholarService', () => {
  let service: ApplyscholarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyscholarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
