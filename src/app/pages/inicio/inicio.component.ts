import { Component, OnInit } from '@angular/core';
import { MxResponsive } from 'src/app/services/mx-responsive.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor (
    public responsive: MxResponsive
  ) { }

  ngOnInit(): void {
  }

}
