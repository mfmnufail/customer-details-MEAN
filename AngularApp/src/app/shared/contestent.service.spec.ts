import { TestBed, inject } from '@angular/core/testing';

import { ContestentService } from './contestent.service';

describe('ContestentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestentService]
    });
  });

  it('should be created', inject([ContestentService], (service: ContestentService) => {
    expect(service).toBeTruthy();
  }));
});
