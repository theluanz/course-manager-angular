import { CourseModule } from './courses/course.module';
import { AppRoutingModule } from './app-routing.module';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavBarComponent, Error404Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
