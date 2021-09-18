import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';

import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramDetailPageComponent } from './program-detail-page/program-detail-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomersReviewComponent } from './customers-review/customers-review.component';
import { HtmlFormatterPipe } from './html-formatter.pipe';

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
    ProgramDetailPageComponent,
    PricingComponent,
    CustomersReviewComponent,
    HtmlFormatterPipe
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
      }, {
        path: 'program/:programid',
        component: ProgramDetailPageComponent
      }
    ]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
