import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  name = '';

  // Todo List App

  task= "";
  taskList : {id: number, task: string}[] =  []

  addTask(){
    this.taskList.push({id: this.taskList.length + 1, task: this.task});
    this.task = '';
    console.log(this.taskList);
     }

     deleteTask(taskId:number){
      this.taskList=this.taskList.filter((item)=> item.id!-taskId);
     }
}
