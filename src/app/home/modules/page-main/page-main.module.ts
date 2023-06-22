import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './page-main.component';
import { PageMainRoutingModule } from './page-main-routing.module';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';



@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    PageMainRoutingModule,
    PageTemplateModule
  ]
})
export class PageMainModule { }
