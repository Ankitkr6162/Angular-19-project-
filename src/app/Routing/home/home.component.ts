import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  // Here we are passing the name data to the profile page.
  goToProfile(){
    this.router.navigate(['profile'],{queryParams:{name:'Ankit Kumar Singh'}})
  }
}
