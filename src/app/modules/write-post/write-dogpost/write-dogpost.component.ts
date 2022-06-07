import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../../../services/public-apis.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write-dogpost',
  templateUrl: './write-dogpost.component.html',
  styleUrls: ['./write-dogpost.component.scss'],
})
export class WriteDogpostComponent {
  listCategories: any = [];
  selectedTopic = '';
  selectedValue = '';
  imagestoShow = [];
  message: string = '';
  strings = ['a', 'b', 'c'];

  constructor(private action: PublicApisService, private http: HttpClient) {
    this.action.getlistCategory().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  applyTopic() {
    return (this.selectedValue = this.selectedTopic);
  }

  // uploadImage(event) {
  //   for (let img of event.target.files)
  //     this.imagestoShow.push({
  //       img,
  //       localUrl: window.URL.createObjectURL(img),
  //     });
  // }
  uploadImage(event) {
    if (event.target.files) {
      for (let i = 0; i < 10; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.imagestoShow.push(event.target.result);
        };
      }
    }
  }

  deleteImage(url) {
    this.imagestoShow.forEach((value, index) => {
      if (value == url) this.imagestoShow.splice(index, 1);
    });
  }

  getUserFormData(data: any) {}

  async onproductUpload() {
    // this.action.uploadedProfileimage.next(this.updateProfile);

    const res = await this.http.post(
      'https://api.pets-like.com/d1/contents/0',
      {
        category: this.selectedValue,
        subject: 'subject string',
        images: this.imagestoShow,
        text: this.message,
        tags: this.strings,
        extra: {
          price: 0,
        },
      },
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
