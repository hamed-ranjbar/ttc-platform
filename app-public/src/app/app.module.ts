// Imports
// Angular Basics
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// Materials
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
// Components
import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramDetailPageComponent } from './program-detail-page/program-detail-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomersReviewComponent } from './customers-review/customers-review.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
// Pipes
import { HtmlFormatterPipe } from './html-formatter.pipe';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContentListComponent } from './content-list/content-list.component';
// modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    HomeListComponent,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    RatingStarsComponent,
    ProgramDetailsComponent,
    ProgramDetailPageComponent,
    PricingComponent,
    CustomersReviewComponent,
    SignupFormComponent,
    SignupPageComponent,
    HtmlFormatterPipe,
    CoursePageComponent,
    CourseDetailsComponent,
    ContentListComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
