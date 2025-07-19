import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  // ngIf Directive
  ShowHeading = false;

  showHeadingButton() {
    this.ShowHeading = !this.ShowHeading;
  }

  block = 0;

  headingButton() {
    this.block++;
  }


  //ngFor Directive

  students = ["Ankit Kumar", "Peter", "Sam", "Khalil", "Prashant"];

  studentData = [
    {
      name: "Ankit",
      age: 29,
      gender: "Male"
    },
    {
      name: "Deepak",
      age: 49,
      gender: "Male"
    },

    {
      name: "Shruthi",
      age: 16,
      gender: "Female"
    }
  ]


  //ngSwitch Directive
  color="";

  changeColor(color:string){
    this.color=color;

  }
}
