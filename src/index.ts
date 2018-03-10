import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeComponent } from './ngx-qrcode2.component';

export * from './ngx-qrcode2.component';

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
