import { Component } from '@angular/core';

@Component({
  selector: 'app-contextual-variable',
  imports: [],
  templateUrl: './contextual-variable.component.html',
  styleUrl: './contextual-variable.component.css'
})
export class ContextualVariableComponent {
users=['Ankit','Aakash','Hrithik','Ravi Raman','Anjan','Rohit','Bhupendra','Gita'];
// users=[]  // When the property is empty then use @empty
}
