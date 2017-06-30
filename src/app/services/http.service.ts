import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class HttpService {
 
    constructor(private http: Http){ }
     
    public getData(): Observable<Response> {
        return this.http.get('tasks.json');
    }

    public async getTask (id: number) {
    	let task: Task;
    	await this.http.get('tasks.json').subscribe((data: Response) => {
        	task = data.json().find((item: Task) => item['id'] === id);
    	});

    	return task;  
    }
}