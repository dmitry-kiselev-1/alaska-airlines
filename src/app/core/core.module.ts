import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlightApiInterceptor } from './interceptors/flight-api.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMaterialDesignModule } from './core-material-design.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, CoreMaterialDesignModule],
  exports: [CoreMaterialDesignModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FlightApiInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only!');
    }
  }
}
