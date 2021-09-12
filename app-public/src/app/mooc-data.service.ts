import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Program } from './home-list/home-list.component';

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
  private handleError(error: any): Promise<any> {
    console.error('something has gone wrong!', error);
    return Promise.reject(error.message || error);
  }
  constructor(private http: HttpClient) { }
}
