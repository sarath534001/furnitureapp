import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routedecideGuard } from './routedecide.guard';

describe('routedecideGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routedecideGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
