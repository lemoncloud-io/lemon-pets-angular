import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  ChangeProfile = '프로필 변경';

  uploadedFile: any = '';
  updateProfile: any = {};

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
        this.updateProfile = json.list[0];
      })
      .catch((err) => console.error(err, 'have a good day'));
  }

  onChange({ target }: Event) {
    const { files } = target as HTMLInputElement;
    if (files) this.uploadedFile = files[0];
    this.uploadImage();
  }

  constructor() {}

  ngOnInit(): void {}
}
