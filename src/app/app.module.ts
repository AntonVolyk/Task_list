import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}   from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent, TableComponent, TaskComponent} from './index';
import {HighPriorityDirective} from './directives/index';
import {appRoutes} from './app.routes';


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
