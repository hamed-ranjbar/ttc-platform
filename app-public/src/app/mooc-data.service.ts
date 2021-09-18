import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Institution, Lecturer, Program } from './program';

@Injectable({
  providedIn: 'root'
})

export class MoocDataService {
  private apiBaseUrl = 'http://localhost:3000/api'
  public getProgram(): Promise<Program[]> {
    const url = `${this.apiBaseUrl}/programs`
    return this.http
        .get(url)
        .toPromise()
        .then(response => response as Program[])
        .catch(this.handleError);
  }
  public getProgramById(programId: string): Promise<Program> {
    const url = `${this.apiBaseUrl}/program/${programId}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Program)
      .catch(this.handleError);
  }
  public getLecturerById(lecturerId: string):Promise<Lecturer> {
    const url = `${this.apiBaseUrl}/instructor/${lecturerId}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Lecturer)
      .catch(this.handleError)
  }
  getInstitutionById(institutionId: string):Promise<Institution> {
    const url = `${this.apiBaseUrl}/institution/${institutionId}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Institution)
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('something has gone wrong!', error);
    return Promise.reject(error.message || error);
  }
  constructor(private http: HttpClient) { }
}
