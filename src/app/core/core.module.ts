import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayPanelModule } from '../shared/components/overlay/overlay-panel.module';



@NgModule({
  declarations: [MenuComponent],
  exports:[MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    OverlayPanelModule

  ]
})
export class CoreModule { }
