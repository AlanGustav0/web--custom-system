import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../shared/components/tooltip/tooltip.module';
import { SignupRoutingModule } from './signup-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    TooltipModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
