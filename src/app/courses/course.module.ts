import { AppPipeModule } from './../shared/pipes/app-pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    AppPipeModule,
    StarModule,
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
