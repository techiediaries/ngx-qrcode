import { Component, Input, OnChanges, ViewChild, Renderer2, ElementRef } from '@angular/core';

declare var require: any;

let QRCode = require('qrcode');

@Component({
  selector: 'ngx-qrcode',
  template: `<div #qrcElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxQRCodeComponent implements OnChanges {

  @Input('qrc-element-type') elementType: 'url' | 'img' | 'canvas' = 'url';
  @Input('qrc-class') cssClass = 'qrcode';
  @Input('qrc-value') value = 'https://www.techiediaries.com';
  @Input('qrc-version') version: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '' = '';

  @Input('qrc-errorCorrectionLevel') errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';
  @Input('qrc-margin') margin = 4;
  @Input('qrc-scale') scale = 4;
  @Input('qrc-width') width = 10;
  @Input('qrc-colorDark') colorDark = '#000000';
  @Input('qrc-colorLight') colorLight = '#ffffff';

  @ViewChild('qrcElement') qrcElement: ElementRef;


  constructor(private renderer: Renderer2) {

  }

  ngOnChanges() {
    this.createQRCode();
  }
  toDataURL() {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(this.value,
        {
          version: this.version,
          errorCorrectionLevel: this.errorCorrectionLevel,
          margin: this.margin,
          scale: this.scale,
          width: this.width,
          color: {
            dark: this.colorDark,
            light: this.colorLight
          }
        }, function (err, url) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            //console.log(url);
            resolve(url);
          }
        })
    });
  }
  toCanvas(canvas) {
    return new Promise((resolve, reject) => {
      QRCode.toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel: this.errorCorrectionLevel,
        margin: this.margin,
        scale: this.scale,
        width: this.width,
        color: {
          dark: this.colorDark,
          light: this.colorLight
        }
      }, function (error) {
        if (error) {
          //console.error(error);
          reject(error);
        }
        else {
          //console.log('success!');
          resolve("success");
        }
      })
    });
  }
  renderElement(element) {
    for (let node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }
  createQRCode() {
    if (!this.value) {
      return;
    };

    let element: Element;
    //console.log("QR Encoding " + this.value);

    switch (this.elementType) {

      case 'canvas':
        element = this.renderer.createElement('canvas');
        this.toCanvas(element).then((v) => {
          //console.log(v);
          this.renderElement(element);
        }).catch((e) => {
          console.error(e);
        });
        break;
      case 'url':
      case 'img':
      default:
        element = this.renderer.createElement('img');
        this.toDataURL().then((v: string) => {
          //console.log(v);
          element.setAttribute("src", v);
          this.renderElement(element);
        }).catch((e) => {
          console.error(e);
        })

    }


  }

}
