import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.css']
})
export class ConfigTableComponent {

  @Input() public appEnvConfig: any;

}
