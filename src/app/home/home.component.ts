import { Component, OnInit } from '@angular/core';
import { Datepicker, Input, initTE } from "tw-elements";
import {Carousel} from "tw-elements";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

ngOnInit() {
    initTE({ Carousel });
  }
}
