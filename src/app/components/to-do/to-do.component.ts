import { Component } from '@angular/core';
import {Todo} from '../../todo';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from '../../components/todo-item/todo-item.component';
import {AddTodoComponent} from '../../components/add-todo/add-todo.component'

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, TodoItemComponent,AddTodoComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
todos : Todo[] = []
localItem : string | null;
constructor (){
  this.localItem = localStorage.getItem("todos");
  if(this.localItem == null){
    this.todos = []
  }else{
    this.todos = JSON.parse(this.localItem)
  }
  
}

deleteTodo(todo:Todo){
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
console.log("todo",todo)
localStorage.setItem("todos",JSON.stringify(this.todos))
}

addToDo(todo:Todo){
console.log("todos added",todo)
this.todos.push(todo);
localStorage.setItem("todos",JSON.stringify(this.todos))
}

toggleToDO(todo:Todo){
const index = this.todos.indexOf(todo);
this.todos[index].active = !this.todos[index].active;
localStorage.setItem("todos",JSON.stringify(this.todos))
}

}
