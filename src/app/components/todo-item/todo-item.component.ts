import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
@Input() todo!: Todo;
@Input() i : number | undefined;
@Output() todoDelete : EventEmitter<Todo> = new  EventEmitter();
@Output() todoCheckBox : EventEmitter<Todo> = new  EventEmitter();
constructor(){}

ngOnInit(): void{}

onClick(todo:any){
this.todoDelete.emit(todo);
  console.log("Event has been trigered")
}

onCheckBoxClick(todo:any){
this.todoCheckBox.emit(todo);
}

}
