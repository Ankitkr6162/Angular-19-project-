import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {

  color = 'red';

  handleColor(val:string){
    this.color = val;
  }

  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value
  }
}
