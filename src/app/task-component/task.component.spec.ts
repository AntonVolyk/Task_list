import {TestBed, ComponentFixture} from '@angular/core/testing';
import {TaskComponent} from './task.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';

let fixture: ComponentFixture<TaskComponent>;

describe('TaskComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpModule, RouterTestingModule],
    	declarations: [TaskComponent]
    });
  });

  it('creating of TaskComponent', () => {
    let fixture = TestBed.createComponent(TaskComponent);
    expect(fixture.componentInstance instanceof TaskComponent)
      .toBe(true, 'should create TaskComponent');
  });

});
 