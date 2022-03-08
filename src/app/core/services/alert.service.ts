import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { IAlertConfig } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private showAlertSubject = new Subject<IAlertConfig>();
  private hideAlertSubject = new Subject();

  constructor() { }

  public getShowAlertSubject() {
    return this.showAlertSubject.asObservable();
  }

  public getHideAlertSubject() {
    return this.hideAlertSubject.asObservable();
  }

  public showError(data: IAlertConfig) {
    this.showAlertSubject.next(data);
  }

  public hideError() {
    this.hideAlertSubject.next();
  }
}
