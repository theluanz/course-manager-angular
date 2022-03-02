import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../courses';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];
  _filterBy: string = '';
  filteredCourse: Course[] = [];

  constructor(private couserService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.couserService.retriveAll();
    this.filteredCourse = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourse = this._courses.filter(
      (cource: Course) =>
        cource.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }
  get filter() {
    return this._filterBy;
  }
}
