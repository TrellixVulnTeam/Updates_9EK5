import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName ='';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {

    onAddServer(nameInput: HTMLInputElement) {
      this.serverCreated.emit({
        serverName:nameInput.value,
        serverContent: this.newServerContent
      });
    }

    onAddBlueprint() {
      // this.serverElements.push({
      //   type: 'blueprint',
      //   name: this.newServerName,
      //   content: this.newServerContent

      // });
    }
  }

}
