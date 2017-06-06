# ngx-qrcode

An Angular 4+ Component library for Generating QR (Quick Response ) Codes .

## Demo 
A simple [demo](https://techiediaries.github.io/ngx-qrcode/demo/)


## Installation

To use ngx-qrcode in your project, install it via npm:

```bash
$ npm install ngx-qrcode --save
```

## Usage

Import the NgxQRCodeModule into your desired module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ngx-barcode module
import { NgxQRCodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the ngx-qrcode component in your Angular application:

```xml
<!-- Adding a barcode in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-barcode [qrc-value]="value" ></ngx-barcode>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Techiediaries](mailto:techiediaries9@gmail.com)
