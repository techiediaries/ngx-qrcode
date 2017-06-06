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
  @Input('qrc-value') value = 'Techiediaries';
  @ViewChild('qrcElement') qrcElement: ElementRef;


  constructor(private renderer: Renderer2) { 
    
  }

  ngOnChanges() {
    this.createQRCode();
  }
  toDataURL(){
    return new Promise((resolve,reject)=>{
      QRCode.toDataURL(this.value, { errorCorrectionLevel: 'H' } ,function (err, url) {
        if(err){
          console.error(err);
          reject(err);
        }
        else{
          console.log(url);
          resolve(url);
        }
      })      
    });
  }
  toCanvas(canvas){
    return new Promise((resolve,reject)=>{
      QRCode.toCanvas(canvas, this.value,{ errorCorrectionLevel: 'H' } ,function (error) {
        if (error){
          //console.error(error);
          reject(error);
        }
        else{
          //console.log('success!');
          resolve("success");
        }     
      }) 
    });   
  }
  renderElement(element){
    for (let node of this.qrcElement.nativeElement.childNodes) {
              this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }            
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }
  createQRCode(){
    if ( ! this.value) { 
      return; 
    };

    let element: Element;
    console.log("QR Encoding " + this.value);
    switch (this.elementType) {

      case 'canvas':
        element = this.renderer.createElement('canvas');
        this.toCanvas(element).then((v)=>{
            console.log(v);
            this.renderElement(element);
        }).catch((e)=>{
          console.error(e);
        });
        break;
      case 'url':
      case 'img':
      default:
        element = this.renderer.createElement('img');
        this.toDataURL().then((v : string)=>{
          console.log(v);
          element.setAttribute("src",v);
          this.renderElement(element);
        }).catch((e)=>{
          console.error(e);
        })
        
    }
    
    
  }

}
