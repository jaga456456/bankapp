import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  @ViewChild('password') el: ElementRef;
  constructor(private loginService: LoginService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      'emailId' : [null, [Validators.required,Validators.email]],
      'password' : [null, [Validators.required,Validators.minLength(6),Validators.pattern(/^d{6}$/)]],
    });
    this.login.setValue({password:'12345',emailId:'jagadeesh.k9090@gmail.com'});
  }
  showPassword() {
    this.el.nativeElement.setAttribute("type","text");
  }
}
