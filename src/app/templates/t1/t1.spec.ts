import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1 } from './t1';

describe('T1', () => {
  let component: T1;
  let fixture: ComponentFixture<T1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
