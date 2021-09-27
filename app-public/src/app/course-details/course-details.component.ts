import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { MoocDataService } from '../mooc-data.service';

import { Program } from '../program';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  program!:Program

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moocDataService: MoocDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('programid')!.toString();
        return this.moocDataService.getProgramById(id);
      })
    ).subscribe((newProgram: Program) => {
      this.program = newProgram;
    })
  }

  showFiller = false;
  public goToPrevious = () => { }
}
