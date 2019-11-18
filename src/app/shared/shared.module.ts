import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
