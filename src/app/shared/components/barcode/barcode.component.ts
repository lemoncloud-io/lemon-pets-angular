import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent {
  constructor() {}

  value = '';
  width = 3;
  displayValue = true;

  get values(): string[] {
    return this.value.split('\n');
  }
}
