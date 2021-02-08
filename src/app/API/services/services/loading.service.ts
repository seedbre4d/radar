import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  constructor() {}

  get loadingValue() {
    return this.loading.value;
  }

  set(value: boolean) {
    this.loading.next(value);
  }
}
