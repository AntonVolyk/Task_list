import {TestBed, ComponentFixture} from '@angular/core/testing';
import {TaskComponent} from './task.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';

let fixture: ComponentFixture<TaskComponent>;
let comp: TaskComponent;
describe('TaskComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpModule, RouterTestingModule],
    	declarations: [TaskComponent]
    });
    fixture = TestBed.createComponent(TaskComponent);
    comp = fixture.componentInstance;
  });

  it('creating of TaskComponent', () => {
    expect(fixture.componentInstance instanceof TaskComponent)
      .toBe(true, 'should create TaskComponent');
  });

  it('onEdit()', () => {
    comp.isEdit = false;
    comp.onEdit()
    expect(comp.isEdit).toBe(true);
  });
});
 