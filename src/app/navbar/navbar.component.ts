import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../services/public-apis.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listLanguage: any = [];
  // language = AppComponent.language;
  language: string = 'en';
  constructor(private action: PublicApisService) {
    this.action.getLanguage().subscribe((data) => {
      this.listLanguage = data;
      console.log(this.listLanguage);
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

  changeLanguage() {}
}
