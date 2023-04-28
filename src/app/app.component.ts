import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  constructor(private rt:Router)
  {

  }

  ngOnInit(): void {
    this.rt.navigate(['/home'])
  }
}
