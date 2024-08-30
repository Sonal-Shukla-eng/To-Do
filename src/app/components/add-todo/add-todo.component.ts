import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  title: string = "";
  description: string = "";

  constructor(){}

  @Output() todoAdd : EventEmitter<Todo> = new  EventEmitter();

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true
    }
    console.log("submitted", todo)
    this.todoAdd.emit(todo)
  }
}
