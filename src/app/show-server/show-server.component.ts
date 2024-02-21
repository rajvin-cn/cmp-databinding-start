import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServerElement } from '../ModelDB/ServerElement';

@Component({
  selector: 'app-show-server',
  templateUrl: './show-server.component.html',
  styleUrl: './show-server.component.css'
})
export class ShowServerComponent {

  @Input() serverElement:ServerElement;

}
