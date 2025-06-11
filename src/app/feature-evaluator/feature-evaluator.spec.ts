import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEvaluator } from './feature-evaluator';

describe('FeatureEvaluator', () => {
  let component: FeatureEvaluator;
  let fixture: ComponentFixture<FeatureEvaluator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEvaluator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureEvaluator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
