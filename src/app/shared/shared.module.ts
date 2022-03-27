import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from './material.module';



@NgModule( {
  exports: [
    ReactiveFormsModule,
    FormsModule,
    // MaterialModule,
  ],
  imports: [
  ]
})
export class SharedModule { }
