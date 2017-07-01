import {Component, OnInit, OnDestroy} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
import {HighPriorityDirective} from '../directives/index';
import {TaskComponent} from '../index';
import {Router} from '@angular/router';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HttpService]
})
export class TableComponent implements OnInit {
	public tasks: Task[];
  private id: number;

	constructor(private httpService: HttpService,
      private router: Router) {}

	ngOnInit() {
		this.httpService.getTaskList().subscribe(tasks => {
        this.tasks = tasks.filter((x: Task) => x['obj_status'] === 'active')
    });
	}

  public onSelect(event: Event, task: Task):void {
      this.router.navigate(['task', task.id]);
  }  
}