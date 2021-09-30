import { Inject,Injectable } from '@angular/core';
import { BROWSER_STORAGE, Storage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage:Storage) { }

  public getToken():string {
    return this.storage.getItem('ttc-platform-token'); 
  }
  public saveToken(token:string): void {
    this.storage.setItem('ttc-platform-token',token);
  }
}
