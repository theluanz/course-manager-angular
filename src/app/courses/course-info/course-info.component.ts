import { CourseService } from './../course.service';
import { Course } from './../courses';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course!: Course;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = +activatedRoute.snapshot.paramMap.get('id')!;

    if (!Number.isNaN(id)) {
      console.log('entrou');
      const getCourse: Course = this.courseService.retriveById(id!);
      if (getCourse.id > -1) {
      }
      getCourse.id !== -1 ? (this.course = getCourse) : this.error404();
      console.log(this.course);
    } else {
      this.error404();
    }
  }

  error404() {
    this.router.navigateByUrl('404');
  }
  ngOnInit(): void {}
}
