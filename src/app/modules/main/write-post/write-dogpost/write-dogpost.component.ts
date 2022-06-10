import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageApiService } from '@app/core/services/image-api.service';
import { LemonAuthService } from '@app/core/services/lemon-auth.service';
import { toArray } from 'rxjs';
import { PublicApisService } from '@app/services/public-apis.service';

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
  testimagestoShow = [];
  message: string = 'testing';
  tags = ['a', 'b', 'c'];
  subject: string = 'Dog';
  dragArea: any;

  constructor(
    private action: PublicApisService,
    private http: HttpClient,
    private imgupload: ImageApiService,
    private authRequest: LemonAuthService
  ) {
    this.action.getlistCategory().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  applyTopic() {
    return (this.selectedValue = this.selectedTopic);
  }

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

  onproductUpload() {
    this.authRequest
      .request$('POST', 'https://api.pets-like.com/d1', '/contents/0', {
        category: this.selectedValue,
        subject: this.subject,
        images: '',
        text: this.message,
        tags: '',
        extra: ' price: 0',
      })
      .pipe(toArray())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
