# @techiediaries/ngx-qrcode

```diff
! ⚠️ WARNING: The NPM package ngx-qrcode2 has been deprecated. Use @techiediaries/ngx-qrcode instead.
```

`@techiediaries/ngx-qrcode` An Angular Component library for Generating QR (Quick Response ) Codes.

You can use the `@techiediaries/ngx-qrcode` to easily generate QR codes inside your Angular 6 or Ionic 3 applications 

>QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to efficiently store data; extensions may also be used. [Source](https://en.wikipedia.org/wiki/QR_code)

## How to install @techiediaries/ngx-qrcode?

To use ngx-qrcode in your project, install it via npm or yarn:

```bash
$ npm install @techiediaries/ngx-qrcode --save
or
$ yarn add @techiediaries/ngx-qrcode
```

## Supported Options

This library is a wrapper over the _[qrcode](https://github.com/soldair/node-qrcode#installation)_ library and does provide a way to configure the supported options using inputs.

```ts
@Input() elementType = DEFAULT_VALUES.elementType;
@Input() cssClass = DEFAULT_VALUES.cssClass;
@Input() alt: string;
@Input() value = DEFAULT_VALUES.value;
@Input() version = DEFAULT_VALUES.version;
@Input() errorCorrectionLevel = DEFAULT_VALUES.errorCorrectionLevel;
@Input() margin = DEFAULT_VALUES.margin;
@Input() scale = DEFAULT_VALUES.scale;
@Input() width = DEFAULT_VALUES.width;
@Input() colorDark = DEFAULT_VALUES.colorDark;
@Input() colorLight = DEFAULT_VALUES.colorLight;
```

Below is a list of the commonly required and supported options along with a brief description<br>
Refer to the [Render Options (from qrcode)](https://github.com/soldair/node-qrcode#renderers-options) to read about these options in detail.

### `elementType`

- Supported Values:
  - IMG
  - URL (default)
  - CANVAS

The Element types are specified in the `NgxQrcodeElementTypes`.
You need to import the same from `@techiediaries/ngx-qrcode`.

```ts
  import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
```

### `cssClass`

- Type: `string`
- Default: `qrcode`
   
This is the class given to the `div` that holds the `qr` image.<br>
The same can be used to apply style to the `img` tag contained in the `div`.

### `value`

- Default: `https://www.techiediaries.com`

The value that needs to be encoded in the QRCode format.

### `margin`

- Type: `Number`
- Default: 4

Defines the width of the white space(aka quiet zone) around a QRCode.

### `scale`

- Type: `Number`
- Default: 4

Scale factor. A value of `1` means 1px per module (black/white dot).

### `width`

- Type: `Number`
- Default: 10

Forces a specific width for the output image.<br>
If width is too small to contain the qr symbol, this option will be ignored.<br>
Takes precedence over `scale`.

## How to use @techiediaries/ngx-qrcode?

For a complete and detailed tutorial on how to use this library. See:

[How to Generate QR Codes In Angular 4+ Applications ](https://www.techiediaries.com/generate-qrcodes-angular)


Import `NgxQRCodeModule` from `@techiediaries/ngx-qrcode`  into your `app.module.ts`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

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
    @techiediaries/ngx-qrcode demo 
  </h1>
</div>

<ngx-qrcode 
  [elementType]="elementType" 
  [value]="value"
  cssClass="aclass"
  errorCorrectionLevel="L">
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

# Contributing
Please see [Contributing Guidelines](.github/CONTRIBUTING.md).

## How to develop @techiediaries/ngx-qrcode?

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

# Code of Conduct
Please see [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## License
[MIT](/LICENSE) © [Techiediaries](mailto:techiediaries9@gmail.com)

## Troubleshoots

With Angular CLI 8.X.X you should add this lines to polyfills.ts

```typescript
// Needed by Buffer needed by QRCode
// tslint:disable-next-line:no-string-literal
(window as any)['global'] = window;
```
