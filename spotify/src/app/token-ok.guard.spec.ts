import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tokenOkGuard } from './token-ok.guard';

describe('tokenOkGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tokenOkGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
