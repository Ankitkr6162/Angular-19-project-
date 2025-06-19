import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';
import { GetsetinputfieldComponent } from './getsetinputfield/getsetinputfield.component';
import { StyleoptionsComponent } from './styleoptions/styleoptions.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ElseIfComponent } from './else-if/else-if.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, 
    ProfileComponent,
     CounterComponent,
      EventComponent,
       GetsetinputfieldComponent,
      StyleoptionsComponent,
    IfElseComponent,
    ElseIfComponent],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Ankit Kumar Singh';
  position = 'Java developer';
  company = "eClinicalWorks"

  handleClickEvent(){
    console.log("Button Clicked !!!"); 
    this.otherEvent(); // Calling one function into another function in a class 
  }

  otherEvent(){
    console.log("Other function called");
  }

  name:string = "Ankit Kumar Singh"; // this is property of the class
  data:number|string = "Ridhar ketan"; // Defining multiple datatype to a property
  otherData:any = true; // Here any datatype can attain any type value of the property.

  updateName(){
    let lastName:string = "Diwan Shah";  // this is variable within the function
    let country:number|string = "India";
    country = 998;
    this.name = "Ram Singh";
    this.data = 5654;
    this.otherData = "Aakash Kumar";
  }

  sum(a:number, b:number){
    console.log(a+b);  
  }
}
