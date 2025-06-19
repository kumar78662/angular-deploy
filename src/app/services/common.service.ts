import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) { }

  getEmployeeRecords() {
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPersons() {
    return this.http.get('https://fakerapi.it/api/v2/persons');
  }
}
