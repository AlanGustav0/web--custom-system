import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelComponent } from './overlay-panel.component';



@NgModule({
  declarations: [
    OverlayPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[OverlayPanelComponent]
})
export class OverlayPanelModule { }
