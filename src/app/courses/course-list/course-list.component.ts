import { Component, OnInit } from '@angular/core';
import { Course } from '../courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Learning angular',
        imageUrl: 'https://github.com/theluanz.png',
        price: 22.5,
        code: 'THZ-313',
        duration: 120,
        rating: 4.5,
        relaseDate: 'February, 25, 2022',
      },
      {
        id: 2,
        name: 'Angular Advanced ',
        imageUrl: 'https://github.com/theluanz.png',
        price: 32.5,
        code: 'THZ-237',
        duration: 50,
        rating: 4,
        relaseDate: 'February, 20, 2022',
      },
    ];
  }
}
