# ngx-qrcode2

`ngx-qrcode2` An Angular Component library for Generating QR (Quick Response ) Codes.

You can use the `ngx-qrcode2` to easily generate QR codes inside your Angular 6 or Ionic 3 applications 

>QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to efficiently store data; extensions may also be used. [Source](https://en.wikipedia.org/wiki/QR_code)

## How to install ngx-qrcode2?

To use ngx-qrcode in your project, install it via npm or yarn:

```bash
$ npm install ngx-qrcode2 --save
or
$ yarn add ngx-qrcode2
```

## How to use ngx-qrcode2?

For a complete and detailed tutorial on how to use this library. See:

[How to Generate QR Codes In Angular 4+ Applications ](https://www.techiediaries.com/generate-qrcodes-angular)


Import `NgxQRCodeModule` from `ngx-qrcode2`  into your `app.module.ts`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';


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


Once the library has been imported, you can use the ngx-qrcode component in your Angular application.

In `app.component.html`, add:
```html

<div style="text-align:center">
  <h1>
    ngx-qrcode2 demo 
  </h1>
</div>

<ngx-qrcode 
      [elementType]="elementType" 
      [value] = "value"
      cssClass = "aclass"
      errorCorrectionLevel = "L">
</ngx-qrcode>

```
In `app.component.ts`, add:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';
}
```


## How to develop ngx-qrcode2?

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
or
$ yarn build

```

To lint all `*.ts` files:

```bash
$ npm run lint
or
$ yarn lint
```

## How to run unit tests?

In development mode:

```bash
$ npm run test:watch ngx-qrcode
or
$ yarn test:watch ngx-qrcode
```
Add `--codeCoverage` option to see code coverage in `coverage` folder.

## How to publish libraries?

```bash
$ npm run lib:publish
or
$ yarn lib:publish
```

## License

MIT © [Techiediaries](mailto:techiediaries9@gmail.com)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
