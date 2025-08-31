import { Component,signal ,computed} from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
todos=signal([
  { text: "Task1", done: false },
    { text: "Task2", done: true },
    { text: "Task3", done: false }
]);
completed_todos=computed(()=>this.todos().filter((t:any)=>t.done).length)

remaining_todos=computed(()=>this.todos().filter((t:any)=>!t.done).length)

toggel(todo:any){

  this.todos.update((list:any)=>
    list.map((t:any)=>(t===todo?{...t,done:!t.done}:t)));
}
}
