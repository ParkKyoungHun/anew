import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonServiceService {

  private headers = new Headers();
  private myParams = new URLSearchParams();
  private options = new RequestOptions({ headers: this.headers, params: this.myParams });

  constructor(protected _http:Http) {
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
  }

  protected setInitHeaders(headers:Map<string,string>){
    headers.forEach((element,key) => {
      this.headers.append(key, element);
      console.log("key" + key);
      console.log("element" + element);
    });
  }

  getJson(url:string, paramMap?:Map<string,any>):Observable<any>{
    if(paramMap){
      paramMap.forEach((element,key)=>{
        this.myParams.append(key, element);
      })
    }
    let options = new RequestOptions({ headers: this.headers, params: this.myParams });
    return this._http.get(url, options)
                    .map(this.extractJson)
                    .catch(this.handleError);
  }

  private extractJson(res: Response) {
    return res.json() || { };
  }  

  private handleError (error: Response | any) {
    let errMsg: string = "error";
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
 
}
