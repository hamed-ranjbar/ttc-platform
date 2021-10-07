import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'Sign Up',
      strapline: 'The begening of your adventure!'
    }
  }
  public hidePassword: boolean = true
  public credentials = {
    name: '',
    email: '',
    password: ''
  }
  public formErrors: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
  }

  signupGroupFormControl = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  public onRegisterSubmit() {
    if (!this.credentials.email || !this.credentials.password) {
      this.formErrors = 'Fill all the required fields';
      return;
    }
    this.credentials.email = this.credentials.email.toLowerCase();
    this.authenticationService.signup(this.credentials)
      .then(() => this.router.navigateByUrl(this.historyService.getPreviousUrl()))
      .catch((message) => this.formErrors = message)
  }
}
