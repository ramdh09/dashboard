import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  data: Observable<Array<any>>;
  constructor( public http:Http ) {
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

  testHttp(url) {
    return this.http.get(url)
      .map(res => res.json());
  }

}
