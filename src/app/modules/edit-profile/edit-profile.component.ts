import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PublicApisService } from '@app/services/public-apis.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  ChangeProfile = '프로필 변경';

  uploadedFile: any = '';
  updateProfile: any = {};
  userName: string = '';
  commingimg: any;

  // @Output() onProfilechange = new EventEmitter<{ profileImage: string }>();

  profileImage = '';

  uploadImage() {
    // add file to FormData object
    const fd = new FormData();
    fd.append('file1', this.uploadedFile);

    // send `POST` request
    console.log(this.uploadedFile);
    console.log(fd);
    fetch('https://api.pets-like.com/img-v1/upload', {
      method: 'POST',
      body: fd,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.updateProfile = json.list[0].url;
      })
      .catch((err) => console.error(err));
  }

  onChange({ target }: Event) {
    const { files } = target as HTMLInputElement;
    if (files) this.uploadedFile = files[0];
    this.uploadImage();
  }

  constructor(private action: PublicApisService, private http: HttpClient) {
    this.action.uploadedProfileimage.subscribe((url) => {
      this.commingimg = url;
    });
  }

  async onProfileChange() {
    // this.action.uploadedProfileimage.next(this.updateProfile);
    let datacollection = new FormData();
    datacollection.set('name', this.userName);
    datacollection.set('photo', this.updateProfile);

    const res = await this.http.post(
      'https://api.pets-like.com/d1/accounts/0',
      datacollection,
      {
        headers: {
          'X-Lemon-Identity':
            'IQoJb3JpZ2luX2VjEMP//////////wEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAP6XRk5yo8H2ZgFpLToXUlNOK5RnfCv1owzsgZ77iOQFAiEA22hQU/kkk7cxp4FBJcjYMb04RKE9O6TgOAh/ILboRhgqowQIvP//////////ARADGgwwODU0MDM2MzQ3NDYiDPmIjwFpaM7quYDnMCr3A1b4Htur9mfqGpU6oiCMFJkLbD5mOxCysf2fRWfiBH0Qu/YJJljN9oWDlElaqXhO29RxGP4I+DAh7R6xR5ZFFt76zj4G8wTW/0m6owS9TT66iUVnm2QL0Bxg/V9ausxHEr3Uyj4RkTLHkFMENKqyewx7/6ZBNen8bRdY6YmCwIwWJcuV/5n3QNOnpK4yOSnpS6EgBRsPQOBxGNTB7lGrZqh44gwsV2smDiYcqVz5+umCn1HZT1MhkltLl+KwER9IkjNNWiFGaNVrRH0zYOxieh2yKmU1tOQkyraoWROd4HhVBb/9wfD9pSpVqtpMRll55BZCk9Yu8ZW6IQLJi3lyNqRtpzkPXMDrOv5VK5dvr2ZWtxwAgRMTLJjl4YxeRiBmW1uk2fax59Z1AnQRCCOEaCxRsLyu61IqyC/ulsNhZ87pGmY9Tw/0tau4c41QBGQW31izjIyj6OrSkNY6gdUkbXN+To0BlaNBpg8YD3cPhHPmwKd6737q11fUHsRa5QNDtaRwWkRAvbTv6h5dM4ErJrd7RE9EVJfXmlnwOlFO5NipXbS198/sEeaO5rZDodNc0RA3mtaAOQeJgShGeCUZiNtVoEfSSd9czKfLjC1oeQT0MVTn9IJWKfTvmnuNoskcdTsgs9MUPYn3BjMjsCFfgFl42greTzhHMIS695QGOoQCSXsxPpHcp1DSQt/iS4BNVWeLhiSdHO6kkxQuQ+rTOPUF9hJ7UXBlO6XZWUWB2aLZ90jm78zXs4UrNLnpdXyBvyy9tuPNNyW/3vWNw3GmiFZrgp+WQcV3tGAjOH8TL6iuVWkiq4ywrbKNwC7aXt85mkKu4y+zECENEvdXuzxUtUg19yegy9Oj6hxIzOqT86MrBRuCTLT4dCmiYf6Cz0KU9VXtlkBUnf5g9Zum5NC0zy9drQNg5TKhEzLjme++QqxuTr0kD9Rb8FuPIX63Mekq+7D221LHONywi+gy9KWT+kMsqTj9mJiSihKcDNMdj/5lpnuqFDwmXNhahNwqkxyyHaD9E+o=',
        },
      }
    );

    // const resData = await res.json()
    console.log(res);
    res.subscribe((data) => {
      console.log(data);
    });
  }
  // ngOnInit(): void {}
}
