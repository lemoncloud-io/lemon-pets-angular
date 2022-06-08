import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PublicApisService } from '@app/services/public-apis.service';
import { HttpClient } from '@angular/common/http';
import {
  ImageApiService,
  UploadedFile,
  UploadFileResponse,
} from '@app/core/services/image-api.service';
import { LemonAuthService } from '@app/core/services/lemon-auth.service';
import { catchError, map, Observable, of, throwError, toArray } from 'rxjs';
import { environment } from '@env/environment';

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

  constructor(
    private action: PublicApisService,
    private http: HttpClient,
    private imgUpload: ImageApiService,
    private authRequest: LemonAuthService
  ) {}

  onChangeProfile() {
    this.authRequest
      .request$('POST', 'https://api.pets-like.com/d1', '/accounts/0', {
        nick: this.userName,
        photo: this.updateProfile,
      })
      .pipe(toArray())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
