import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private translateService: TranslateService) {}
  // public selectLanguage(event: any) {
  //   this.translateService.use(event.target.value);
  //   console.log(event.target.value);
  // }
}
