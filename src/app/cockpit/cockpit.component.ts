import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom, // define how u want angular kinda override css styled for components // Emulated is default, None, ShadowDom
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Input() serverElements: object[];
  @Output() onServerCreated = new EventEmitter<{}>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.onServerCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
