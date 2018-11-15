import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './routing/app.routing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpTaskHandler } from './httpTaskHandler';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpTaskHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
