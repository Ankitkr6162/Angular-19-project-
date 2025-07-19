import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  // basic reactive forms
name = new FormControl('default name');
password = new FormControl('default password');

displayValue(){
  console.log(this.name.value, this.password.value);
  
}

setValues(){
  this.name.setValue('John');
  this.password.setValue('xxxx');
}

// form grouping in reactive forms

profileForm = new FormGroup({
  name : new FormControl('anil'),
  password : new FormControl('test password'),
  email: new FormControl('test email'),

})
onSubmit(){
  console.log(this.profileForm.value);
  
}

setValuesForForms(){
  this.profileForm.setValue({
    name:'Ankit Kumar Singh',
    password:'2321',
    email:'ankitkumar@gmail.com'
  })
}

}
