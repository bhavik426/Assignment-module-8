import { Component } from '@angular/core';

@Component({
  selector: 'app-cssday1',
  templateUrl: './cssday1.component.html',
  styleUrls: ['./cssday1.component.css']
})
export class Cssday1Component {
data=''
flip()
{
  if(this.data=='')
  {
    this.data='hidden'
  }
  else{
    this.data=''
  }
}
}
