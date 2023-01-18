import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch:'full',
  },
  {
    path:'welcome',
    loadChildren:() => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path:'login',
    loadChildren:() => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'cadastro',
    loadChildren:() => import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
