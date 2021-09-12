import { Component, OnInit } from '@angular/core';
import { Program } from '../home-list/home-list.component';

import { MoocDataService } from '../mooc-data.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})

export class ProgramDetailsComponent implements OnInit {

  constructor() { }
  
  public program!:Program;
  private getProgram() {}
  ngOnInit(): void {
  }

}
