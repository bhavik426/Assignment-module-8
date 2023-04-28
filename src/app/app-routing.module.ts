import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { HtmlAssignment1Component } from './html/day1/html-assignment1/html-assignment1.component';
import { HtmlAssignment2Component } from './html/day1/html-assignment2/html-assignment2.component';
import { Day1Component } from './html/day1/day1.component';
import { CssComponent } from './css/css.component';
import { Cssday1Ass1Component } from './css/cssday1/cssday1-ass1/cssday1-ass1.component';
import { Cssday1Ass2Component } from './css/cssday1/cssday1-ass2/cssday1-ass2.component';
import { Cssday1Ass3Component } from './css/cssday1/cssday1-ass3/cssday1-ass3.component';
import { Cssday2Ass1Component } from './css/cssday2/cssday2-ass1/cssday2-ass1.component';
import { Cssday2Ass2Component } from './css/cssday2/cssday2-ass2/cssday2-ass2.component';
import { Cssday2Ass3Component } from './css/cssday2/cssday2-ass3/cssday2-ass3.component';
import { Cssday2Ass4Component } from './css/cssday2/cssday2-ass4/cssday2-ass4.component';
import { Cssday2Ass5Component } from './css/cssday2/cssday2-ass5/cssday2-ass5.component';
import { Cssday2Ass6Component } from './css/cssday2/cssday2-ass6/cssday2-ass6.component';
import { Cssday1Component } from './css/cssday1/cssday1.component';
import { Cssday2Component } from './css/cssday2/cssday2.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'html', component: HtmlComponent },
  {
    path: 'html', children: [
      {
        path: 'hday1', component: Day1Component,
        children: [
          {
            path: 'htmlAssi1', component: HtmlAssignment1Component
          },
          {
            path: 'htmlAssi2', component: HtmlAssignment2Component
          }
        ]
      }
    ]
  },
  { path: 'css', component: CssComponent },
  {
    path: 'css', children: [
      {
        path: 'cday1', component: Cssday1Component,
        children: [
          {
            path: 'cssAssi1', component: Cssday1Ass1Component
          },
          {
            path: 'cssAssi2', component: Cssday1Ass2Component
          },
          {
            path: 'cssAssi3', component: Cssday1Ass3Component
          }
        ]
      },
      {
        path: 'cday2', component: Cssday2Component,
        children: [
          {
            path: 'cssAssi1', component: Cssday2Ass1Component
          },
          {
            path: 'cssAssi2', component: Cssday2Ass2Component
          },
          {
            path: 'cssAssi3', component: Cssday2Ass3Component
          },
          {
            path: 'cssAssi4', component: Cssday2Ass4Component
          },
          {
            path: 'cssAssi5', component: Cssday2Ass5Component
          },
          {
            path: 'cssAssi6', component: Cssday2Ass6Component
          }
        ]
      }
    ]
  },
  { path: '', component :AppComponent },
  { path: '**', component :NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
