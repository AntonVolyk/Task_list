import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() selectedTask: Task;

	constructor() {}

	ngOnInit() {
		debugger;
	}


}