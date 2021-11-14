import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  constructor() {}

  getAll(): Observable<any> {
    console.log('getAll');
    return of();
  }
}
