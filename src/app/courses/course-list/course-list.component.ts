import { Component, OnInit } from '@angular/core';

import { Course } from '../courses';
import { CourseService } from './../course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];
  _filterBy: string = '';
  filteredCourse: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourse = this._courses;
      },
      error: (err) => console.log('error: ' + err),
    });
  }

  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('delete-sucess');
        this.retrieveAll();
      },
      error: () => {
        console.log('error');
      },
    });
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
