import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTasksFromService();
    // this.showTasks();
    // this.createTasks();
    // this.updateTasks();
    // this.destroyTasks();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data['tasks'];
  });
 }
//   showTasks() {
//     let observable = this._httpService.showTasks();
//     observable.subscribe(data => {
//       console.log('Got the one tasks!', data);
//       this.tasks = data['tasks'];
//   });
//  }

//   createTasks() {
//     let observable = this._httpService.showTasks();
//     observable.subscribe(data => {
//       console.log('Got the one tasks!', data);
//       this.tasks = data['tasks'];
//   });
//  }

//   updateTasks() {
//     let observable = this._httpService.showTasks();
//     observable.subscribe(data => {
//       console.log('Got the one tasks!', data);
//       this.tasks = data['tasks'];
//   });
//  }

//  destroyTasks() {
//   let observable = this._httpService.showTasks();
//   observable.subscribe(data => {
//     console.log('Got the one tasks!', data);
//     this.tasks = data['tasks'];
//   });
//  }

}
