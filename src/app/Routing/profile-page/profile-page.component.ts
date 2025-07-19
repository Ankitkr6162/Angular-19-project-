import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  userName:string|null="";
  
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.userName=params['name'];
      
    })
  }
}
