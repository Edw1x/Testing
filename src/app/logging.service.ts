import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  logStatusChange(status: string) {
    console.log('a server changed' + status);
  }
}
