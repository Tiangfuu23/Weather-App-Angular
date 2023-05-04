import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner: boolean = true;
  constructor() {}
  /***** UI ******/
  isLoading(): boolean {
    return this.showSpinner;
  }
}
