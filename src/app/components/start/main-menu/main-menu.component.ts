import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  template: `
    <div id="main-menu">
      <a
      [routerLink]="['/servicios']"
      routerLinkActive="active"
      class="underlined menu-item"
      (click)="clicked.emit()"
      >Servicios</a>
      <a
        [routerLink]="['/musica']"
        routerLinkActive="active"
        class="underlined menu-item"
        (click)="clicked.emit()"
      >Música</a>
      <a
        [routerLink]="['/contacto']"
        routerLinkActive="active"
        class="underlined menu-item"
        (click)="clicked.emit()"
      >Contacto</a>
    </div>

  `,
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
