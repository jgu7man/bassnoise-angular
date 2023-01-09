import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container">
      <div class="row">
        <div class="col s12 center">
          <small>by Jorge Gu7man | Marxa Digital</small>
        </div>
      </div>
    </div>
  `,
  styles: [ `
    :host {
      background: #202020;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
