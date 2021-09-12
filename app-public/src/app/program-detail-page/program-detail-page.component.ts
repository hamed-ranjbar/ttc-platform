import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { MoocDataService } from '../mooc-data.service';
import { Program } from '../home-list/home-list.component';

@Component({
  selector: 'app-program-detail-page',
  templateUrl: './program-detail-page.component.html',
  styleUrls: ['./program-detail-page.component.css']
})

export class ProgramDetailPageComponent implements OnInit {

  constructor(
    private moocDataService: MoocDataService,
    private route: ActivatedRoute
  ) { }

  pageContent = {
    header: {
      title: '',
      strapline: ''
    }
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params:ParamMap) => {
          let id = params.get('programid')!.toString();
          return this.moocDataService.getProgramById(id);
        })
      ).subscribe((newProgram:Program) => {
        this.pageContent.header.title = newProgram.name
      })
  }

}
