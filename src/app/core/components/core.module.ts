import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Error404Component } from './error404/error404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, Error404Component],
  imports: [
    RouterModule,
    RouterModule.forChild([
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  exports: [NavBarComponent],
})
export class CoreMoule {}
