import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PublicApisService } from '@app/core/services/public-apis.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  listLanguage: any = [];
  listCategories: any = [];
  languageValue: '';
  language: string;
  selectedValue = '';
  constructor(
    private action: PublicApisService,
    private translateService: TranslateService
  ) {
    this.action.getLanguage().subscribe((data) => {
      this.listLanguage = data;
    });

    this.action.getListTags().subscribe((data) => {
      this.listCategories = data;
    });
  }

  // Function for filter
  callSelectedValue() {
    this.action.filterSubject.next(this.selectedValue);
  }

  // Sidebat toggle function

  check: boolean = !false;

  sidebarToggle() {
    if (this.check == false) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  // Function for apply language

  applyLanguage() {
    this.language = this.languageValue;
    this.translateService.use(this.language);
  }
}
