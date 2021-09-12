import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramDetailPageComponent } from './program-detail-page/program-detail-page.component';

@NgModule({
  declarations: [
    HomeListComponent,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    HtmlLineBreaksPipe,
    RatingStarsComponent,
    ProgramDetailsComponent,
    ProgramDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      }, {
        path: 'about',
        component: AboutComponent
      },{
        path: 'program/:programid',
        component: ProgramDetailPageComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
