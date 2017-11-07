import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common/common-service.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {User} from'./user';
@Injectable()
export class UserDataService extends CommonServiceService{
  private usersUrl:string="api/users";
  constructor(protected _http:Http) {
    super(_http);
  }
  
  getUsers(searchUser:User): Observable<User[]> {
    let paramMap:Map<string, Object> = new Map<string, Object>();
    paramMap.set("user",JSON.stringify(searchUser));
    return super.getJson(this.usersUrl, paramMap);
  }
}
