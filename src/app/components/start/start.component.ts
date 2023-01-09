import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MxResponsive } from 'src/app/services/mx-responsive.service';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public opened: boolean = false;
  public page: string = ''

  constructor (
    public responsive: MxResponsive,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe( () => {
      this.page = this.route.snapshot.firstChild?.data.page
      if (this.page) this.opened = true
    })

  }

  ngOnInit(): void {
    console.log( this.page )
  }

}
