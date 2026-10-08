import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callapis } from './callapis';

describe('Callapis', () => {
  let component: Callapis;
  let fixture: ComponentFixture<Callapis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Callapis],
    }).compileComponents();

    fixture = TestBed.createComponent(Callapis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
