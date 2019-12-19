import { TestBed, async, inject } from '@angular/core/testing';

import { AngularAuthGuard } from './angular-auth.guard';

describe('AngularAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularAuthGuard]
    });
  });

  it('should ...', inject([AngularAuthGuard], (guard: AngularAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
