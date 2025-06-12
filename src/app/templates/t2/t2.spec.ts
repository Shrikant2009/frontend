import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2 } from './t2';

describe('T2', () => {
  let component: T2;
  let fixture: ComponentFixture<T2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
