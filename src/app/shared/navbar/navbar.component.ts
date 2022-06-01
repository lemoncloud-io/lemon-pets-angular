import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PublicApisService } from '../../services/public-apis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listLanguage: any = [];
  listCategories: any = [];
  @Output() onLanguagechange = new EventEmitter<{ languageValue: string }>();
  languageValue: '';
  language = '';
  constructor(private action: PublicApisService) {
    this.action.getLanguage().subscribe((data) => {
      this.listLanguage = data;
      console.log(this.listLanguage);
    });

    this.action.getListTags().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  ngOnInit(): void {}

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
    this.onLanguagechange.emit({
      languageValue: this.language,
    });
  }
}
