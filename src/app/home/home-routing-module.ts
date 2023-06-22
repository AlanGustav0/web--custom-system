import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/page-main/page-main.module').then(
            (m) => m.PageMainModule
          ),
      },
      {
        path: 'perfil-usuario',
        loadChildren: () =>
          import('./modules/page-profile/page-profile.module').then(
            (m) => m.PageProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
