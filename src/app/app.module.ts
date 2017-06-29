import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { AppComponent, TableComponent, TaskComponent} from './index';
import {HighPriorityDirective} from './directives/index';

@NgModule({
  imports: [
    BrowserModule, HttpModule
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
