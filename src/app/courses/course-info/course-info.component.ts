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
  ) {}

  error404() {
    this.router.navigateByUrl('404');
  }

  saveChanges() {
    this.courseService.saveCourse(this.course).subscribe({
      next: () => this.router.navigateByUrl('/'),
    });
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.courseService.retrieveById(id).subscribe({
      next: (course) => {
        if (course) {
          this.course = course;
        } else {
          this.error404();
        }
      },
      error: (error) => {
        console.log('erro: ' + error);
        this.error404();
      },
    });
  }
}
