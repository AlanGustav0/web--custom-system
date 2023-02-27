
import { SigninRoutingModule } from './signin-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../shared/components/tooltip/tooltip.module';
import { LottieModule } from 'ngx-lottie';
export function playerFactory(): any {
  return import('lottie-web');
}



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    TooltipModule,
    LottieModule.forRoot({ player: playerFactory })],

})
export class SigninModule { }
