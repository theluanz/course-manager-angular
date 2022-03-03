import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { Error404Component } from './error404/error404.component';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
