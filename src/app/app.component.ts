import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoComponent} from '../app/components/to-do/to-do.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TO-DO';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "Changed title";
    // }, 2000)
  }
}
