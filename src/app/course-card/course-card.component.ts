import {Component, Input, OnInit} from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course; // create object (is from course.ts)

  constructor() { }

  ngOnInit(): void {
  }

}
