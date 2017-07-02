import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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

	constructor(private activatedRoute: ActivatedRoute,
      private httpService: HttpService) {} 

  ngOnInit() {
      this.httpService.getTask(parseInt(this.activatedRoute.snapshot.params['id']))
        .subscribe(x => this.task = x);
  } 

  public onEdit() {
      this.isEdit = !this.isEdit;
  }

  public onSave(event: Event, name: string) {
      this.onEdit();
      this.task.name = name;
      this.httpService.putData(this.task).subscribe();
  }
}