import { Component, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../ModelDB/ServerElement';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrl: './create-server.component.css'
})
export class CreateServerComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  @Output() ServerCreatedEvent = new EventEmitter<ServerElement>();

  
  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    console.log("emitting create server");
    this.ServerCreatedEvent.emit( new ServerElement(this.newServerName,'server',this.newServerContent));
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    
    console.log("emitting create Blueprint");
    this.ServerCreatedEvent.emit( new ServerElement(this.newServerName,'blueprint',this.newServerContent));
  }

}
