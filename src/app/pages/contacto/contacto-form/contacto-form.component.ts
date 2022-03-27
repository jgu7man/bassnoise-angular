import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.scss']
})
export class ContactoFormComponent implements OnInit {

  contactoForm: FormGroup = new FormGroup( {
    nombre: new FormControl( '', [ Validators.required ] ),
    celular: new FormControl( '', [ Validators.required ] ),
    description: new FormControl( '')
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
