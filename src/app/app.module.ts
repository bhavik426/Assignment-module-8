import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { HtmlAssignment1Component } from './html/day1/html-assignment1/html-assignment1.component';
import { HtmlAssignment2Component } from './html/day1/html-assignment2/html-assignment2.component';
import { Day1Component } from './html/day1/day1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Cssday1Component } from './css/cssday1/cssday1.component';
import { Cssday2Component } from './css/cssday2/cssday2.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    HtmlAssignment1Component,
    HtmlAssignment2Component,
    CssComponent,
    Day1Component,
    NavbarComponent,
    Cssday1Component,
    Cssday2Component,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
