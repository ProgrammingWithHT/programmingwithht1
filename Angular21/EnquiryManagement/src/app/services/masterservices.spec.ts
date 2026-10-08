import { TestBed } from '@angular/core/testing';

import { Masterservices } from './masterservices';

describe('Masterservices', () => {
  let service: Masterservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Masterservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
