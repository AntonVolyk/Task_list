import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TableComponent } from './table.component';
import {HighPriorityDirective} from '../directives/highPriority.directive';

let fixture: ComponentFixture<TableComponent>;

describe('TableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [HttpModule, RouterTestingModule],
    	declarations: [TableComponent, HighPriorityDirective]});
  });

  it ('creating of TableComponent', () => {
    let fixture = TestBed.createComponent(TableComponent);
    expect(fixture.componentInstance instanceof TableComponent)
    	.toBe(true, 'should create TableComponent');
  });
});	


