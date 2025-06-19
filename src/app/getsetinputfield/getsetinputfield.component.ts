import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetinputfield',
  imports: [],
  templateUrl: './getsetinputfield.component.html',
  styleUrl: './getsetinputfield.component.css'
})
export class GetsetinputfieldComponent {
name="";
displayName="";
email="";

getName(event:Event){
  this.name=(event.target as HTMLInputElement).value;
}

showName(){
  this.displayName=this.name;
}

setName(){
  this.name="Sammy";
}

getEmail(val:string){
console.log(val);
this.email=val;
}

setEmail(){
  this.email="test@gmail.com"
}
}
