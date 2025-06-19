import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  handleEvent(event:Event){
    console.log("Function called",event.type);
    
  }
}
