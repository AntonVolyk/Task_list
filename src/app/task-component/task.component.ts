import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';


@Component({
  selector: 'task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[HttpService]
})
export class TaskComponent implements OnInit {
  public task: Task;
  public isEdit: boolean = false;

  receivedTask: Task;
  done: boolean = false;

	constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private httpService: HttpService) {} 

  ngOnInit() {
      this.httpService.getTask(parseInt(this.activatedRoute.snapshot.params['id']))
        .subscribe(x => this.task = x);
  } 

  public onEdit() {
      this.isEdit = !this.isEdit;
  }

  public onSave() {
      this.onEdit();
      
      this.httpService.putData(this.task)
        .subscribe((data) => {this.receivedTask = data; this.done = true;});
  }
}