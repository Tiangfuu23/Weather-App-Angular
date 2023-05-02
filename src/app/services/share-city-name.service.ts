import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareCityNameService {
  constructor() {}
  // subj = new Subject<any>();
  subj = new BehaviorSubject<any>('');
  sentCityName(cityName: any): void {
    this.subj.next(cityName);
  }
}
