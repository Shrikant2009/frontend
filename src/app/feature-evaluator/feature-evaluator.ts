import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { EvalResponse, Feature, Operation, Variation } from '../model/features';
import { ApiHttp } from '../services/http';


@Component({
  selector: 'app-feature-evaluator',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './feature-evaluator.html',
  styleUrls: ['./feature-evaluator.scss']
})
export class FeatureEvaluator implements OnInit {
  features: Feature[] = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'String' }
  ];

  operations: Operation[] = [];
  variations: Variation[] = [];

  selectedFeature: number | null = null;
  selectedOperation: number | null = null;
  selectedVariation: Variation | null = null;

  inputValues: { [key: string]: any } = {};
  result: number | null = null;
  status: string = '';

  constructor(private api: ApiHttp) { }

  ngOnInit(): void {
    // No need to fetch features, since they're hardcoded
  }

  onFeatureChange(): void {
    console.log('Selected Feature ID:', this.selectedFeature); // 🔍 Debug log

    this.operations = [];
    this.variations = [];
    this.selectedOperation = null;
    this.selectedVariation = null;
    this.result = null;
    this.status = '';

    if (this.selectedFeature !== null) {
      this.api.getOperations(this.selectedFeature)
        .subscribe({
          next: data => {
            console.log('Operations loaded:', data); // 🔍 Debug log
            this.operations = data;
          },
          error: err => console.error('Error fetching operations:', err)
        });
    }
  }
  onOperationChange(): void {
    this.variations = [];
    this.selectedVariation = null;
    this.result = null;
    this.status = '';

    if (this.selectedOperation !== null) {
      this.api.getVariants(this.selectedOperation)
        .subscribe({
          next: data => this.variations = data,
          error: err => console.error('Error fetching variations:', err)
        });
    }
  }

  onVariationSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const vid = Number(target.value);
    this.selectVariation(vid);
  }

  selectVariation(vid: number): void {
    this.selectedVariation = this.variations.find(v => v.id === vid) || null;
    this.inputValues = {};
    this.result = null;
    this.status = '';
  }

  onSubmit(): void {
    if (!this.selectedVariation) return;

    const payload = {
      username: localStorage.getItem('username') || 'guest',
      variation_id: this.selectedVariation.id,
      inputs: this.inputValues
    };

    this.api.evaluate(payload)
      .subscribe({
        next: resp => {
          this.result = resp.result;
          this.status = resp.status;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.status = `Error: ${err.error?.message || err.message}`;
        }
      });
  }
}