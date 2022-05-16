import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../services/public-apis.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  listTags: any = [];
  constructor(private action: PublicApisService) {
    this.action.getData().subscribe((data) => {
      this.listTags = data;
      console.log(this.listTags);
    });
  }

  ngOnInit(): void {}
}
