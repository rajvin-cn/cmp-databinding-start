import { Component } from '@angular/core';
import { ServerElement } from './ModelDB/ServerElement';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:ServerElement[] = [];

  addNewServer(ele: ServerElement) {
    console.log("Adding new element");
    this.serverElements.push(ele);
    console.log(this.serverElements);
  }

}
