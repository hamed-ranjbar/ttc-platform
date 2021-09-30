import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupGroupFormControl = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')]),
    goal: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    nationality: new FormControl('',[Validators.required]),
    course: new FormControl('',[Validators.required]),
    workshop: new FormControl('',[Validators.required])
  })

  selected: String = '';
}
