import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../../routing/app.routing';
import { LoginComponent } from '../../components/login/login.component';
import { LoginService } from '../../services/login/login.service';
import { HttpTaskHandler } from '../../httpTaskHandler';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [HttpTaskHandler, LoginService]
})
export class LoginModule { }

