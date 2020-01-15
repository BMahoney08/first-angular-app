import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2']
  bool = true;
  clicks = [];

  constructor() { 
    setTimeout(() => {
     this.allowNewServer = true },2000
    )}

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created';
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onButtonClick() {
    let date = new Date();
    this.clicks.push(date.toLocaleString());
    this.bool = !this.bool;
  }


}
