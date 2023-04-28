import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data='hidden'
  toggle()
  {
    if(this.data=='hidden')
    {
      this.data = '';
    }
    else{
      this.data ='hidden'
    }
  }
}
