import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3 } from './t3';

describe('T3', () => {
  let component: T3;
  let fixture: ComponentFixture<T3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
