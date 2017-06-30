import {Routes} from '@angular/router';
import {TableComponent, TaskComponent} from './index';

export const appRoutes: Routes =[
    { path: '', component: TableComponent},
    { path: 'task', component: TaskComponent},
    { path: 'task/:id', component: TaskComponent},
    { path: '**', redirectTo: '/' }
];