import {ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TableComponent } from './table.component';
import {HighPriorityDirective} from '../directives/highPriority.directive';
import {Router} from '@angular/router';

let fixture: ComponentFixture<TableComponent>;
let comp: TableComponent;
let task = {
    "id": 1,
    "name": "Today_task1",
    "is_completed": false,
    "is_archived": false,
    "estimated_effort": 5.5,
    "actual_effort": 3.3,
    "physical_progress": 60,
    "obj_status": "active",
    "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
    "project_id": 0
  };

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('TableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [HttpModule, RouterTestingModule],
    	declarations: [TableComponent, HighPriorityDirective],
     providers:[ {provide: Router,      useClass: RouterStub }]

    });
    fixture = TestBed.createComponent(TableComponent);
      comp = fixture.componentInstance;
  });

  it ('creating of TableComponent', () => {
    expect(fixture.componentInstance instanceof TableComponent)
    	.toBe(true, 'should create TableComponent');
  });

  it('should call Router.navigateByUrl("task/id") with the ID of the task', 
    inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigateByUrl');
      comp.onSelect(null, task);
      const url = spy.calls.first().args[0];
      expect(url).toBe('/task/1');
  }));
});	


