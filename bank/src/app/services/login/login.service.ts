import { Injectable } from '@angular/core';
import { HttpTaskHandler } from '../../httpTaskHandler';

@Injectable()
export class LoginService {
  constructor(private http:HttpTaskHandler) { }

  getUserDetails() {
    return this.http.get('GetUserDetails.json');
  }
}
