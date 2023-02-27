import { CoreModule } from './core/core.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';

export function playerFactory(): any {
  return import('lottie-web');
}


@NgModule({
  declarations:[AppComponent],
  imports: [BrowserModule,AppRoutingModule,CoreModule,LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
