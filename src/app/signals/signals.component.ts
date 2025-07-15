import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

count=signal(10);

  updateValue(val:string){
    if(val =='dec'){
      this.count.set(this.count()-1);
    }else{
      this.count.set(this.count()+1)
    }
  }

  data : WritableSignal<number | string> = signal<number | string>(100); // Writable Signal can be updated
  num:Signal<number> = computed(()=>90); // Computed signal are read only cannot be updated. 

  updateSignal(){
   this.data.set('Hello');  
  //  this.data.update((val)=>val+1); // update method is used when signal have single datatype. 
  }



// Computed Signals cannot be updated directly but if we change the dependent values then it can changes
// Here x and y are dependent of z then x changes then z also gets updated.
  x=signal(10);
  y=signal(20);
  z=computed(()=> this.x() + this.y());

  showValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
    
  }

  //Effects in Angular
  username=signal('Ankit Kumar');
  countNum=signal(0);
  displayHeading=false;

  constructor(){
    effect(()=>{
       if(this.countNum()==2){
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        },2000)
       }else{
        this.displayHeading=false;

       }      
    })
  }

  toggleValue(){
    this.countNum.set(this.countNum()+1);
  }

}
