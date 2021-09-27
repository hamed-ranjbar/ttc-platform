import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { AboutComponent } from '../about/about.component';
import { ProgramDetailPageComponent } from '../program-detail-page/program-detail-page.component';
import { CoursePageComponent } from '../course-page/course-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'program/:programid',
  component: ProgramDetailPageComponent
}, {
  path: 'program/:programid/:courseid/:materialid',
  component: CoursePageComponent
}, {
  path: 'signup',
  component: SignupPageComponent
},{
  path: '**',
  component:NotFoundComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
