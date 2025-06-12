import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4 } from './t4';

describe('T4', () => {
  let component: T4;
  let fixture: ComponentFixture<T4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
