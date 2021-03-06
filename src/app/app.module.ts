import { CoreMoule } from './core/components/core.module';
import { CourseModule } from './courses/course.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    CoreMoule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
