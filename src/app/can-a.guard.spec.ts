import { TestBed } from '@angular/core/testing';

import { CanAGuard } from './can-a.guard';

describe('CanAGuard', () => {
  let guard: CanAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
