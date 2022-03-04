import { Error404Component } from './../error404/error404.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './../star/star.component';
import { ReplacePipe } from './../pipe/replace.pipe';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },

      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class CourseModule {}
