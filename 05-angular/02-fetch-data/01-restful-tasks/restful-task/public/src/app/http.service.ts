import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.showTasks();
    // this.createTasks();
    // this.updateTasks();
    // this.destroyTasks();
  }

  getTasks()  {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._http.get('/')
 }

//  showTasks() {
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.get('/:id');
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log('Got our task!', data));
//  }

//  createTasks() {
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.post('/');
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log('Got our task!', data));
//  }

//  updateTasks() {
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.put('/');
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log('Got our task!', data));
//  }

//  destroyTasks() {
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.delete('/');
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log('Got our task!', data));
//  }

}
