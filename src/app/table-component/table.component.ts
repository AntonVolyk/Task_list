import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HttpService]
})
export class TableComponent implements OnInit {
	public tasks: object[];

	constructor(private httpService: HttpService) {}

	ngOnInit() {
		this.httpService.getData().subscribe((data: Response) => {
            this.tasks = data.json().filter((item: object) => item['obj_status'] === 'active');
        });
	}

}