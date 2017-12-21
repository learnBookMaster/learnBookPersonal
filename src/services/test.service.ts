import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestService{

constructor (private http: Http) {}

private Android = 'assets/testJson/androidTest.json';
private Cordova = 'assets/testJson/cordovaTest.json';

getTest(testType): Observable<[{}]>{

let url: string = this.Cordova;
if(testType == 'Android'){
  url=this.Android;
}

return this.http.get(url).map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

}
