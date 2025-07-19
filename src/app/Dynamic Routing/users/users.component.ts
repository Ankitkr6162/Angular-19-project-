import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

name:string|null="";

  constructor(private route:ActivatedRoute){


  }

  ngOnInit(){
   this.route.params.subscribe((params)=>{
     this.name=params['name'];
   })
  }
}
