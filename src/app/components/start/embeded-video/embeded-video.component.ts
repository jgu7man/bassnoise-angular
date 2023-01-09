import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embeded-video',
  template: `
    <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/U0D888r1eqc" title="EDUA & CHRISAR FT BASSNOISE - Q.C.A. REMIX (VIDEO OFICIAL)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>
  `,
})
export class EmbededVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
