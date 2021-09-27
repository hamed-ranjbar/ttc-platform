import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../program';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  @Input() program!:Program
  constructor() { }
  
  ngOnInit(): void {
  }

}
