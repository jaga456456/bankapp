import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DashboardRoutingModule } from '../../routing/app.routing';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { HttpTaskHandler } from '../../httpTaskHandler';
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
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent,
  HomeComponent, NewsComponent,
  ServicesComponent,
  ProductsComponent,
  ContactsComponent,],
  providers: [HttpTaskHandler, DashboardService, SharedService]
})
export class DashboardModule { }
