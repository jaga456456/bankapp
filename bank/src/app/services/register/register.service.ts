import { Injectable } from '@angular/core';
import { HttpTaskHandler } from '../../httpTaskHandler';
@Injectable()
export class RegisterService {

  constructor(private http:HttpTaskHandler) { }
  getUserDetails() {
    return this.http.get('GetUserDetails.json');
  }
  getDashboardDetails(){
    return this.http.get('GetDashboardSettings.json');
  }
}
