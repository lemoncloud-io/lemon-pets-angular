import { Component, OnInit } from '@angular/core';
import { Items } from './items.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: Items[] = [
    new Items('Product1', '125', '12.12.2022'),
    new Items('Product2', '122', '14.12.2022'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
