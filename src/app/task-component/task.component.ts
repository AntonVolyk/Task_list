import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Response} from '@angular/http';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[HttpService]
})
export class TaskComponent implements OnInit {
  public task: Task;

	constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe((data: Response) => {
        this.task = data.json().find((item: Task) => 
          item['id'] === parseInt(this.activatedRoute.snapshot.params['id'])
        );
    });  
  }
}