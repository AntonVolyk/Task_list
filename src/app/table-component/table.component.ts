import {Component, OnInit, OnDestroy} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
import {HighPriorityDirective} from '../directives/index';
import {TaskComponent} from '../index';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HttpService]
})
export class TableComponent implements OnInit, OnDestroy {
	public tasks: Task[];
  private subscription: Subscription;
  private id: number;

	constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.id = params['id']);
  }

	ngOnInit() {
		this.httpService.getData().subscribe((data: Response) => {
            this.tasks = data.json().filter((item: Task) => item['obj_status'] === 'active');
        });
	}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClickTask(event: Event, task: Task):void {
   
  
  }  
}