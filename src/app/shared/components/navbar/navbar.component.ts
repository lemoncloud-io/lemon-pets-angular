import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PublicApisService } from '@app/services/public-apis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listLanguage: any = [];
  listCategories: any = [];
  languageValue: '';
  language: string;
  linkvalue: string;
  constructor(private action: PublicApisService) {
    this.action.getLanguage().subscribe((data) => {
      this.listLanguage = data;
    });

    this.action.getListTags().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  check: boolean = !false;

  myfunction() {
    if (this.check == false) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  applyLanguage() {
    this.language = this.languageValue;
    this.action.language.next(this.language);
  }

  ngOnInit(): void {
    this.action.filterSubject.next(this.linkvalue);
  }
}
