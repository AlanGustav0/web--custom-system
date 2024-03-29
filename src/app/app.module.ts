import { CoreModule } from './core/core.module';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
//import { InterceptorModule } from './core/services/interceptors/interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './core/ngxs/app.state';
import { environment } from 'src/environments/environments';
import { AppHandler } from './core/ngxs/app.handler';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HomeRoutingModule } from './home/home-routing-module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


export function noop() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return function () {};
}

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    CoreModule,
    //InterceptorModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key:'appModel'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory:noop,
      deps: [AppHandler],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
