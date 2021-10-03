import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { AuthResponse } from './authresponse';
import { MoocDataService } from './mooc-data.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private moocDataService: MoocDataService
  ) { }

  public getToken(): string {
    return this.storage.getItem('ttc-platform-token') as string;
  }
  public saveToken(token: string): void {
    this.storage.setItem('ttc-platform-token', token);
  }

  public login(user: User): Promise<any> {
    return this.moocDataService.login(user).then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public signup(user: User): Promise<any> {
    return this.moocDataService.signup(user).then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
  public logout(): void {
    this.storage.removeItem('ttc-platform-token');
  }
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      return payload.exp > (Date.now() / 1000)
    } else
      return false
  }
  public getCurrentUser(): User {
    const token = this.getToken();
    const {email,name} = JSON.parse(atob(token.split('.')[1]));
    return {email,name} as User;
  }
}
