import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL: string = 'http://localhost:3333/api';

  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
