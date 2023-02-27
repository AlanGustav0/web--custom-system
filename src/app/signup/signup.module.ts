import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../shared/components/tooltip/tooltip.module';
import { SignupRoutingModule } from './signup-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { LottieModule } from 'ngx-lottie';
export function playerFactory(): any {
  return import('lottie-web');
}



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    TooltipModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })]
})
export class SignupModule { }
