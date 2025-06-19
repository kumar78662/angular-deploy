import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

  isClicked: boolean = false;
  displayedColumns: string[] = ['id', 'employee_name', 'employee_age'];
  dataSource: any;
  // clickedRows = new Set<PeriodicElement>();

constructor(
  private commonService: CommonService
) {}
  ngOnInit(): void {
    this.commonService.getEmployeeRecords().subscribe((res: any)=>{
      console.log(res?.data);
      this.dataSource = res?.data;
    })
  }
  

  // @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  test(row: any, event: any) {
    // this.isClicked = !this.isClicked;
    // console.log(row)
    // console.log('event', event)
  }

}
