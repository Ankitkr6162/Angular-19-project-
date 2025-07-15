import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  users = ['Anil','Sam','Tony','Dilip'];
  students= [{
    name:'Ankit',
    email:'ankit@gmail.com',
    age:23
  },
  {
    name:'Aakash',
    email:'akash@gmail.com',
    age:23
  },
  
{
    name:'Trio',
    email:'ankit@gmail.com',
    age:29
  }
 
]
}
