import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvalResponse, Operation, Variation } from '../model/features';

@Injectable({
  providedIn: 'root'
})
export class ApiHttp {
  private endpoint = "http://localhost:8081";
  private url = {
    variants: "/api/variations",
    evaluate: "/api/evaluate",
    operations: "/api/operations"
  }

  constructor(private http: HttpClient) { }

  getVariants(selectedOperation: number) {
    return this.http.get<Variation[]>(`${this.endpoint}${this.url.variants}`, {
      params: {
        operation_id: selectedOperation
      }
    });
  }
  getOperations(selectedFeature: number) {
    return this.http.get<Operation[]>(`${this.endpoint}${this.url.operations}`, {
      params: {
        feature_id: selectedFeature
      }
    });
  }
  evaluate(payload: any) {
    return this.http.post<EvalResponse>(`${this.endpoint}${this.url.evaluate}`, payload)
  }
}
