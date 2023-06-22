import { NgModule } from '@angular/core';
import { PageProfileComponent } from './page-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PageProfileComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageProfileRoutingModule {

}
