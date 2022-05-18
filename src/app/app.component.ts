import { Component, Input, Output } from '@angular/core';
import { LemonAuthService } from '@core/services/lemon-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemon-pets-angular';
  check: boolean = false;
  changesLanguage = '';

  constructor(private readonly authService: LemonAuthService) {
    this.authService.pollingCredentials$().subscribe();
  }

  myfunction() {
    if (this.check == false) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  onLanguageValueReceived(addedValue: { languageValue: string }) {
    this.changesLanguage = addedValue.languageValue;
  }
}
