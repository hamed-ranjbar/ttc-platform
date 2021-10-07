import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'Sign In',
      strapline: 'get back on track!'
    }
  };
  public hidePassword: boolean = true;
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
  public formErrors: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private historyService:HistoryService
  ) { }

  ngOnInit(): void {
  }

  public loginGroupFormControl = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  public onLoginSubmit() {
    this.credentials.email = this.credentials.email.toLowerCase();
    if (!this.credentials.email || !this.credentials.password) {
      this.formErrors = 'All the fields are required!'
      return;
    }
    this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl(this.historyService.getPreviousUrl()))
      .catch((message) => this.formErrors = message);
  }
}
