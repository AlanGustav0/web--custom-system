import { NgModule } from "@angular/core";
import { Interceptor } from "./interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  providers:[Interceptor,{
    provide: HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true
  }]
})
export class InterceptorModule{}
