import { CourseModule } from './courses/course.module';
import { AppRoutingModule } from './app-routing.module';
import { ReplacePipe } from './shared/pipes/replace-pipe/replace.pipe';
import { StarComponent } from './shared/components/star/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavBarComponent, Error404Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
