import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';

import QRCode from 'qrcode';

import { NgxQrcodeElementTypes } from './qrcode.types';
import { DEFAULT_VALUES } from './qrcode.constants';

@Component({
  selector: 'ngx-qrcode',
  template: `
    <div #qrcElement [class]="cssClass"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrcodeComponent implements OnChanges {

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

  @ViewChild('qrcElement') qrcElement: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges() {
    this.createQRCode();
  }

  createQRCode() {
    if (!this.value) {
      return;
    }

    let element: Element;

    switch (this.elementType) {

      case NgxQrcodeElementTypes.CANVAS:
        element = this.renderer.createElement('canvas');
        this.toCanvas(element).then(() => {
          this.renderElement(element);
        }).catch(e => {
          this.removeElementChildren();
          console.error(e);
        });
        break;
      default:
        element = this.renderer.createElement('img');
        this.toDataURL().then((src: string) => {
          element.setAttribute('src', src);
          if (this.alt) {
            element.setAttribute('alt', this.alt);
          }
          this.renderElement(element);
        }).catch(e => {
          this.removeElementChildren();
          console.error(e);
        });
    }
  }

  private toDataURL(): Promise<string> {
    return QRCode.toDataURL(this.value,
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
      });
  }

  private toCanvas(canvas): Promise<any> {
    return QRCode.toCanvas(canvas, this.value, {
      version: this.version,
      errorCorrectionLevel: this.errorCorrectionLevel,
      margin: this.margin,
      scale: this.scale,
      width: this.width,
      color: {
        dark: this.colorDark,
        light: this.colorLight
      }
    });
  }

  private renderElement(element): void {
    this.removeElementChildren();
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }

  private removeElementChildren(): void {
    for (const node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }
  }
}
