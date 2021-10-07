import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Institution, Lecturer, Program } from './program';
import { AuthResponse } from './authresponse';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})

export class MoocDataService {
  private apiBaseUrl = (environment.production) ? 'http://ttc-moghadam.herokuapp.com/api' : 'http://localhost:3000/api'

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

  public getLecturerById(lecturerId: string): Promise<Lecturer> {
    const url = `${this.apiBaseUrl}/instructor/${lecturerId}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Lecturer)
      .catch(this.handleError)
  }

  public getInstitutionById(institutionId: string): Promise<Institution> {
    const url = `${this.apiBaseUrl}/institution/${institutionId}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Institution)
      .catch(this.handleError)
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('/login', user);
  }

  public signup(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('/signup', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('something has gone wrong!', error);
    return Promise.reject(error.message || error);
  }
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }
}
