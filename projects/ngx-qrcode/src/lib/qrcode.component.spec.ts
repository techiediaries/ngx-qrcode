import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

import QRCode from 'qrcode';

import { QrcodeComponent } from './qrcode.component';
import { DEFAULT_VALUES } from './qrcode.constants';
import { NgxQrcodeElementTypes } from './qrcode.types';

describe('QrcodeComponent', () => {
  let component: TestHostComponent;
  let qrcodeComponent: QrcodeComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let toDataURLSpy: jasmine.Spy;
  let toCanvasSpy: jasmine.Spy;
  const IMAGE_SRC = 'imgSrc';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QrcodeComponent, TestHostComponent]
    })
      .compileComponents();

    toDataURLSpy = spyOn(QRCode, 'toDataURL').and.returnValue(Promise.resolve(IMAGE_SRC));
    toCanvasSpy = spyOn(QRCode, 'toCanvas').and.returnValue(Promise.resolve(null));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    qrcodeComponent = component.qrcodeComponent;
  });

  it('should create', () => {
    expect(qrcodeComponent).toBeTruthy();
  });

  describe('when has no value', () => {
    beforeEach(() => {
      component.value = null;
      fixture.detectChanges();
    });

    it('should not render nothing', () => {
      expect(qrcodeComponent.qrcElement.nativeElement.childNodes.length).toBe(0);
    });
  });

  describe('when elementType is url', () => {
    beforeEach(() => {
      component.elementType = NgxQrcodeElementTypes.URL;
    });

    it('should render img element', done => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(qrcodeComponent.qrcElement.nativeElement.childNodes[0].tagName.toLowerCase()).toBe('img');
        done();
      });
    });

    it('should not render img alt attribute by default', done => {
      const defaultAlt = '';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const imageElement = qrcodeComponent.qrcElement.nativeElement.childNodes[0];
        expect(imageElement.alt).toBe(defaultAlt);
        done();
      });
    });

    it('should render img alt attribute when defined', done => {
      const alt = 'hello alt';
      component.alt = alt;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const imageElement = qrcodeComponent.qrcElement.nativeElement.childNodes[0];
        expect(imageElement.alt).toBe(alt);
        done();
      });
    });

    it('should catch QRCode error and have no children', done => {
      fixture.whenStable().then(() => {
        toDataURLSpy.and.returnValue(Promise.reject('error in toDataURL'));
        component.cssClass = 'fire change detection';
        fixture.detectChanges();
        const renderSpy = spyOn<any>(qrcodeComponent, 'renderElement');
        const removeSpy = spyOn<any>(qrcodeComponent, 'removeElementChildren');
        fixture.whenStable().then(() => {
          expect(renderSpy).not.toHaveBeenCalled();
          expect(removeSpy).toHaveBeenCalled();
          done();
        });
      });
    });
  });

  describe('when elementType is canvas', () => {
    beforeEach(() => {
      component.elementType = NgxQrcodeElementTypes.CANVAS;
    });

    it('should render a canvas element', done => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(qrcodeComponent.qrcElement.nativeElement.childNodes[0].tagName.toLowerCase()).toBe('canvas');
        done();
      });
    });

    it('should catch QRCode error and have no children', done => {
      fixture.whenStable().then(() => {
        toCanvasSpy.and.returnValue(Promise.reject('error in toCanvas'));
        fixture.detectChanges();
        const renderSpy = spyOn<any>(qrcodeComponent, 'renderElement');
        const removeSpy = spyOn<any>(qrcodeComponent, 'removeElementChildren');
        fixture.whenStable().then(() => {
          expect(renderSpy).not.toHaveBeenCalled();
          expect(removeSpy).toHaveBeenCalled();
          done();
        });
      });
    });
  });
});

@Component({
  template: `
    <ngx-qrcode #qrcodeComponent [elementType]="elementType" [cssClass]="cssClass" [value]="value" [alt]="alt"></ngx-qrcode>`
})
class TestHostComponent {
  @ViewChild('qrcodeComponent') qrcodeComponent: QrcodeComponent;
  elementType = DEFAULT_VALUES.elementType;
  cssClass = DEFAULT_VALUES.cssClass;
  alt;
  value = DEFAULT_VALUES.value;
}
