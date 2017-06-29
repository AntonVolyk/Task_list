import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
import {HighPriorityDirective} from '../directives/index';
import {TaskComponent} from '../index';


@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HttpService]
})
export class TableComponent implements OnInit {
	public tasks: object[];
  public selectedTask: Object;
  public isShowTask: boolean = false;

	constructor(private httpService: HttpService) {}

	ngOnInit() {
		this.httpService.getData().subscribe((data: Response) => {
            this.tasks = data.json().filter((item: object) => item['obj_status'] === 'active');
        });
	}

  public onClickTask(event: Event, task: Object):void {
    this.isShowTask = !this.isShowTask;
    this.selectedTask = task;
  }
}