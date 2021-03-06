import { Injectable } from '@angular/core';
import { HttpTaskHandler } from '../../httpTaskHandler';

@Injectable()
export class DashboardService {
  constructor(private http:HttpTaskHandler) { }

  getUserDetails() {
    return this.http.get('GetUserDetails.json');
  }

  getDashboardSettings() {
    return this.http.get('GetDashboardSettings.json');
  }
}
