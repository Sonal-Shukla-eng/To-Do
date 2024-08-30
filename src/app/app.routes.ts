import { Routes } from '@angular/router';
import {ToDoComponent} from '../app/components/to-do/to-do.component';
import {AboutComponent} from '../app/components/about/about.component'

export const routes: Routes = [
{path: '', component: ToDoComponent},
{path: 'about', component: AboutComponent},
];
