import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProfileComponent } from './page-profile.component';
import { PageProfileRoutingModule } from './page-profile-routing.module';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'src/app/shared/components/tooltip/tooltip.module';

@NgModule({
  declarations: [PageProfileComponent],
  imports: [
    CommonModule,
    PageProfileRoutingModule,
    PageTemplateModule,
    ReactiveFormsModule,
    TooltipModule
  ],
})
export class PageProfileModule {}
