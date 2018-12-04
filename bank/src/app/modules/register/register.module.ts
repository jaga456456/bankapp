import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';
import { RegisterRoutingModule } from '../../routing/app.routing';
import { HttpTaskHandler } from '../../httpTaskHandler';
import { RegisterService } from '../../services/register/register.service';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../../components/home/home.component';
import { NewsComponent } from '../../components/news/news.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { SharedService } from '../../services/shared/shared.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  declarations: [  RegisterComponent, HeaderComponent, HomeComponent, NewsComponent,
    ServicesComponent,
    ProductsComponent,
    ContactsComponent],
  providers:[RegisterService,HttpTaskHandler, SharedService]
})
export class RegisterModule { }
