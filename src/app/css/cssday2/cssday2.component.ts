import { Component } from '@angular/core';

@Component({
  selector: 'app-cssday2',
  templateUrl: './cssday2.component.html',
  styleUrls: ['./cssday2.component.css']
})
export class Cssday2Component {
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
