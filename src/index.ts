import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeComponent } from './ngx-qrcode.component';

export * from './ngx-qrcode.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxQRCodeComponent,

  ],
  exports: [
    NgxQRCodeComponent,
  ]
})
export class NgxQRCodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxQRCodeModule,
      providers: []
    };
  }
}
