import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { Program, Lecturer, Institution } from '../program';

import { MoocDataService } from '../mooc-data.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})

export class ProgramDetailsComponent implements OnInit {

  program!: Program
  institution!: Institution
  lecturer!: Lecturer
  constructor(
    private moocDataService: MoocDataService,
    private route: ActivatedRoute
  ) { }
  getLecturer(id: string) {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.moocDataService.getLecturerById(id);
        })
      )
      .subscribe((newInstructor: Lecturer) => {
        this.lecturer = newInstructor
      })
  }
  getInstructor(id: string) {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.moocDataService.getInstitutionById(id);
        })
      )
      .subscribe((newInstitution: Institution) => {
        this.institution = newInstitution
      })
  }
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('programid')!.toString();
          return this.moocDataService.getProgramById(id);
        })
      ).subscribe((newProgram: Program) => {
        this.program = newProgram;
        this.getLecturer(this.program.lecturer_id);
        this.getInstructor(this.program.institution_id);
      })
  }

}
