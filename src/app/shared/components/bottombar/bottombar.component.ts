import { Component, Input, OnInit } from '@angular/core';
import { PublicApisService } from '@app/services/public-apis.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  listTags: any = {};
  language = '';

  constructor(private action: PublicApisService) {
    this.action.getListTags().subscribe((data) => {
      this.listTags = data;
      console.log(this.listTags);
    });
  }

  ngOnInit(): void {
    this.action.language.subscribe((res) => {
      this.language = res;
    });
  }
}
