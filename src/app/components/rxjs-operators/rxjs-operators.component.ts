import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  interval,
  map,
  of,
  switchMap,
} from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit {
  constructor(private commonService: CommonService) {
    // for rxjs for search functionality
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value) => of(value))
      )
      .subscribe((res) => console.log(res));
  }

  // for search functionality
  search = new FormControl();

  intervalObservable = from([1, 23, 4, 6, 3, 6]);

  ngOnInit(): void {
    // this.commonService
    //   .getEmployeeRecords()
    //   .pipe(map((ele: any) => ele.data))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    this.intervalObservable
      .pipe(
        filter((ele: any) => {
          console.log('filter', ele)
          return ele > 2;
        }),
        map((value)=>value*2)
      )
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
