import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltipcomponent';



@NgModule({
  declarations: [
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TooltipComponent]
})
export class TooltipModule { }
