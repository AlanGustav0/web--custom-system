import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from './../shared/components/tooltip/tooltip.module';
import { RegisterRoutingModule } from './register-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TooltipModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
