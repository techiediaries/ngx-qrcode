# ngx-qrcode

An Angular 4+ Component library for Generating QR (Quick Response ) Codes .

## Demo 
A simple [demo](https://www.techiediaries.com/demos/ngx-qrcode/)


## Installation

To use ngx-qrcode in your project, install it via npm:

```bash
$ npm install ngx-qrcode2 --save
```

## Usage
For a complete and detailed tutorial on how to use this library .See  :

<a href="https://www.techiediaries.com/generate-qrcodes-angular">How to Generate QR Codes In Angular 4+ Applications </a>

Import the NgxQRCodeModule from ngx-qrcode  into your app :

Once the library is imported, you can use the ngx-qrcode component in your Angular application:

```xml

      <ngx-qrcode 
        [qrc-value] = "value"
        qrc-class = "aclass"
        qrc-errorCorrectionLevel = "L">
        </ngx-qrcode>

```
You can also specify the QRCode version (1 to 40) explicitely 

```xml

      <ngx-qrcode 
        qrc-element-type="url" 
        [qrc-value] = "value"
        qrc-version = "40"></ngx-qrcode>

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
