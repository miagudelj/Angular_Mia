import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  beginnerCourses = COURSES[3];
  architectureCourses = COURSES[8];
  rxjsCourse = COURSES[1];
  completeTSCourse = COURSES[7];

}
