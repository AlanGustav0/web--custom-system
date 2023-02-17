
import { SigninRoutingModule } from './signin-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../shared/components/tooltip/tooltip.module';




@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    TooltipModule
  ],

})
export class SigninModule { }
