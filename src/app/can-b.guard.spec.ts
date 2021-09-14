import { TestBed } from '@angular/core/testing';

import { CanBGuard } from './can-b.guard';

describe('CanBGuard', () => {
  let guard: CanBGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanBGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
