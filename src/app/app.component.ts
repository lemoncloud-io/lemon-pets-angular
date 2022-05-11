import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemon-pets-angular';
  check: boolean = false;

  myfunction() {
    if (this.check == false) {
      this.check = true;
    } else {
      this.check = false;
    }
  }
}
