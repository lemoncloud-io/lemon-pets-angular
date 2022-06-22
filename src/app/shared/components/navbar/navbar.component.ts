import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PublicApisService } from '@app/core/services/public-apis.service';
import { TranslateService } from '@ngx-translate/core';

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
  selectedValue = '';
  @Output() public linkvalue = new EventEmitter<string>();
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
    this.translateService.use(this.language);
  }

  ngOnInit(): void {
    this.linkvalue.emit(this.selectedValue);
  }
}
