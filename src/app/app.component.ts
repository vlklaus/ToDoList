import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
filter: string = "";

  title: string = 'To-Do List';

  sampleToDo: ToDo [] = [
    {
      task: "make bed",
      completed: true,
      duration: .1,
      priority: "High" 
    },
    {
      task: "vacuum floor",
      completed: false,
      duration: .5,
      priority: "High"
    },
    {
      task: "mop floor",
      completed: false,
      duration: 1,
      priority: "Low"
    },
    {
      task: "do laundry",
      completed: true,
      duration: .25,
      priority: "Normal"
    }
  ];

  formTask: ToDo = {} as ToDo;

  completeTask(targetTask: ToDo): void{
    targetTask.completed = true;
  }

  deleteTask(targetTask: ToDo): void {
    let index: number = this.sampleToDo.findIndex(t => t == targetTask);
    this.sampleToDo.splice(index, 1);
  }

  AddTask(): void {
    let newTask: ToDo = {...this.formTask};
    newTask.completed = false;
    this.sampleToDo.push(newTask);
  }

  // isListCompleted(): boolean {
  //   //no items
  //   if(this.sampleToDo.length==0) {return true;}

  //   //any incomplete
  //   let allComplete: boolean = true;
  //   this.sampleToDo.forEach((t:ToDo) => {
  //     if(t.completed == false) {
  //       allComplete false;
  //     }
  //   })
  //   return allComplete;
  // }

  IsListCompleted():boolean {
    //No items
    if(this.sampleToDo.length == 0){
      return true;
    }
    //any incomplete
    let allComplete:boolean = true;
    this.sampleToDo.forEach((t: ToDo) =>{
      if(t.completed == false){
        allComplete = false;
      }
    });
    //all complete
    return allComplete;
  }

  GetFiltered(): ToDo[] {
    if (this.filter=="") {
      return this.sampleToDo;
    } 
    else {
      return this.sampleToDo.filter((t: ToDo) => t.task.toLowerCase().includes(this.filter.toLowerCase())); //like where method in c#
    }
  }


}

