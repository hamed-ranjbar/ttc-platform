import { Component, OnInit } from '@angular/core';

import { MoocDataService } from '../mooc-data.service';

export class Program {
  _id!: string;
  name!: string;
  description!: string;
  rating!: number;
  bgImage!: string;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor(private moocDataService: MoocDataService) { }

  public programs!: Program[];
  private getProgram(): void {
    this.moocDataService.getProgram().then(foundProgram => this.programs = foundProgram);
  }
  ngOnInit(): void {
    this.getProgram();
  }

}
