import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Response, Headers, Http} from '@angular/http';
var swal = require('sweetalert');

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  data: Observable<Array<any>>;
  //request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;

  constructor(public http: Http) {

  }

  public backendUrl: string = 'http://demo9273001.mockable.io/';

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    console.log(error);
    return swal('Error !', error, 'error');
  }

  getQuery(url: string) {
    return this.http.get(this.backendUrl + url)
      .map((response: Response) => response.json())
      .do(data => data)
      .catch(this.handleError);
  }

  getData() {
    return this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next('Hello');
      }, 4000);

      setTimeout(() => {
        observer.next('World');
      }, 1000);
    });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateData(length:number,min,max){
    let i : number;
    var x:number[];
    var y:any;
    for (i = 0, i <= length ; i++;){
      y = this.getRandomNumber(min,max);
      x.push(y);
    }
    return y;
  }

  testHttp(url) {
    return this.http.get(url)
      .map(res => res.json());
  }

}
