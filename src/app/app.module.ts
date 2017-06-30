import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent, TableComponent, TaskComponent} from './index';
import {HighPriorityDirective} from './directives/index';

// routes settings
const appRoutes: Routes =[
    { path: '', component: TableComponent},
    { path: 'task', component: TaskComponent},
    { path: 'task/:name', component: TaskComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent, 
    TableComponent,
    TaskComponent,
    HighPriorityDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
