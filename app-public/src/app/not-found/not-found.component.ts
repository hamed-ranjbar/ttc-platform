import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  pageHeader = {
    header:{
      title:'404: Page not found!'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
