import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div fxLayout="row">
    <div fxLayout="column">
      <md-input-container><textarea mdInput placeholder="qrc-value" [(ngModel)]="value"></textarea></md-input-container>
      <br/>
      <md-select placeholder="qrc-element-type" [(ngModel)]="elementType">
        <md-option value="url">URL</md-option>
        <md-option value="img">IMAGE</md-option>
        <md-option value="canvas">CANVAS</md-option>
      </md-select>
      <br/>
    </div>
    <div fxLayout="column">
      <ngx-qrcode 
        [qrc-element-type]="elementType" 
        [qrc-value] = "value"
      ></ngx-qrcode>
    </div>
  </div>

  `,
  styles: []
})
export class AppComponent {
  elementType = 'url';
  value = 'Techiediaries';
  get values(): string[] {
    return this.value.split('\n');
  }

}
