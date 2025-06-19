import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDataDialogComponent } from './add-data-dialog/add-data-dialog.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  posts$: any;

  constructor(private dialog: MatDialog,
    private HttpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.posts$ = this.HttpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

  onBtnClick() {
    let dialogRef = this.dialog.open(CardComponent, {
      height: '400px',
      width: '600px',
    });
  }

  addData() {
    this.dialog.open(AddDataDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

  removeData() {}
}
