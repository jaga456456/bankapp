import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';
import { RegisterRoutingModule } from '../../routing/app.routing';
import { HttpTaskHandler } from '../../httpTaskHandler';
import { RegisterService } from '../../services/register/register.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [  RegisterComponent],
  providers:[RegisterService,HttpTaskHandler]
})
export class RegisterModule { }
