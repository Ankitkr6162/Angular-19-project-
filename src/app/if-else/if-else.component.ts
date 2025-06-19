import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  display = true;

  toggleTwoDiv = true;

  hidediv(){
    this.display= false;
  }

   showDiv(){
    this.display= true;
  }

  toggleDiv(){
    this.display=!this.display;
  }

  toggleTwoDivs(){
    this.toggleTwoDiv=!this.toggleTwoDiv;
  }

}
