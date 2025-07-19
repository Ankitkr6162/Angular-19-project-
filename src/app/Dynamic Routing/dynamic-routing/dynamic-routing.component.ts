import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  imports: [RouterLink],
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css'
})
export class DynamicRoutingComponent {

users = [
  {
    id:1,
    name:"Ankit Kumar Singh",
    age:29
  },

   {
    id:2,
    name:"Jagpreet Kumar Singh",
    age:19
  },

   {
    id:3,
    name:"Harpreet Kumar Singh",
    age:29
  },
   {
    id:4,
    name:"Manpreet Kumar Singh",
    age:39
  },

]

}
