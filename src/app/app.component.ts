import { Component, Input, OnInit, Output } from '@angular/core';
import { LemonAuthService } from '@core/services/lemon-auth.service';
import {
  IDeviceInfo,
  LemonOAuthTokenResult,
  RegisterDeviceResponse,
} from '@app/types';
import { StorageService } from '@core/services/storage.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lemon-pets-angular';
  check: boolean = false;
  changesLanguage = '';
  profileImage = '';

  constructor(
    private readonly authService: LemonAuthService,
    private readonly storageService: StorageService,
    private readonly loaderService: LoaderService,
    private readonly router: Router
  ) {
    this.authService.pollingCredentials$().subscribe();
  }

  async ngOnInit() {
    this.loaderService.show();
    await this.registerDevice();
  }

  private async registerDevice() {
    const installId =
      this.storageService.get('installId') ||
      Math.random().toString(36).slice(2, 20);
    this.storageService.set('installId', installId);

    const version = '0.0.0'; // TODO: refactor this line
    const deviceInfo = {
      stage: 'dev',
      platform: 'web',
      application: 'pets',
      deviceId: this.storageService.get('deviceId') || '',
      installId,
      version,
    };
    // STEP1: /public/reg-dev
    const registerDevice: RegisterDeviceResponse = await this.authService
      .request(
        'POST',
        environment.petsApiEndpoint,
        '/public/reg-dev',
        {},
        deviceInfo
      )
      .catch(() => {
        alert('ERROR: cannot get credentials');
        this.loaderService.hide();
        return;
      });
    console.log('registerDevice:', registerDevice);

    // set deviceId to storage
    if (registerDevice.deviceId) {
      this.storageService.set('deviceId', registerDevice.deviceId || '');
    }

    // STEP2: build AWS credentials
    const lemonOAuthToken: LemonOAuthTokenResult = registerDevice.Token;
    if (lemonOAuthToken) {
      await this.authService.buildCredentialsByToken(lemonOAuthToken);
    }

    // STEP3: register with deviceId
    const deviceId =
      registerDevice.deviceId || this.storageService.get('deviceId') || '';
    if (!deviceId) {
      alert('ERROR: no device id');
      this.loaderService.hide();
      return;
    }
    const accountsInfo = await this.authService.request(
      'POST',
      environment.petsApiEndpoint,
      '/accounts/reg-dev',
      {},
      { ...deviceInfo, deviceId }
    );
    console.log('accountsInfo:', accountsInfo);

    this.router.navigate(['/main']).then(() => this.loaderService.hide());
  }

  onLanguageValueReceived(addedValue: { languageValue: string }) {
    this.changesLanguage = addedValue.languageValue;
  }
}
