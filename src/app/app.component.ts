import { Component } from '@angular/core';
import { LemonAuthService } from '@core/services/lemon-auth.service';
import {} from './services/public-apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemon-pets-angular';
  check: boolean = false;
  public static language: string = 'ko';
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
}
