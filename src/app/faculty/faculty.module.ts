import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FacultyComponent,
    
   
  
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule
    
  
  ],
  exports:[
    FacultyComponent,

  ]
})
export class FacultyModule { }
