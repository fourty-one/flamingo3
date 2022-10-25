import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../../app.config';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor (private http: HttpClient) {}

  getAll() {
    return this.http.get(appConfig.host + '/products.json')
  }
  
}