import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharedService {
  public headerSettings = new Subject<any>();
  constructor() { }

  setHeaderSettings(settings) {
    this.headerSettings.next(settings);
  }

  getHeaderSettings() {
    return this.headerSettings.asObservable();
  }

}
