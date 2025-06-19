import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, from, interval, mergeMap, of, switchMap, tap } from 'rxjs';
@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.scss'],
})
export class InternationalizationComponent implements OnInit {
  constructor(private http: HttpClient) {}

  obs = of(1,2,3,4000);

  ngOnInit(): void {
    let obsv1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    let obsv2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2');
    let obsv3 = this.http.get('https://jsonplaceholder.typicode.com/todos/3');
    let Obs1Arr = from([obsv1,obsv2,obsv3]);

    // this.http
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .pipe(tap((res) => console.log('from tap', res)))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    Obs1Arr.pipe(mergeMap(res=>res)).subscribe((result) => {
      console.log(result);
    });
  }

  Today = new Date();
}
