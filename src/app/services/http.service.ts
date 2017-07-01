import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class HttpService {
 
    constructor(private http: Http){ }
     
    public getTaskList (): Observable<Task[]> {
        return this.http.get('tasks.json')
        	.map(x => x.json());
    }

    public getTask (id: number): Observable<Task>{
    	return this.http.get('tasks.json')
    		.map((x: Response) => {
    			let tasks = x.json();
    			let task: Task;
                
    			for (let item of tasks) {
    				if (item.id === id) {
    					task = item;
    					break;
    				}
    			}

    			return task;
    		}); 
    }

    public putData(item: Task) {
        let headers = new Headers([{ 'Content-Type': 'application/json;charset=utf-8' }]);
        
        const body = JSON.stringify(item);
        
        return this.http.put('http://localhost:8080/addTask', body, {headers: headers})
            .catch((error:any) => Observable.throw(error)); 
    }
}