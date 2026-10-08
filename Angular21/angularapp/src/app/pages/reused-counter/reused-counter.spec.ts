import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusedCounter } from './reused-counter';

describe('ReusedCounter', () => {
  let component: ReusedCounter;
  let fixture: ComponentFixture<ReusedCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusedCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusedCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
