import { Component, OnInit } from '@angular/core';
import { LemonAuthService } from '@app/core/services/lemon-auth.service';
import { toArray } from 'rxjs';
import { PublicApisService } from '@app/core/services/public-apis.service';
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
  tags = ['a', 'b', 'c'];
  subject: string = 'dog';
  dragArea: any;

  constructor(
    private action: PublicApisService,
    private authRequest: LemonAuthService
  ) {
    this.action.getlistCategory().subscribe((data) => {
      this.listCategories = data;
    });
  }

  applyTopic() {
    return (this.selectedValue = this.selectedTopic);
  }

  uploadImage(event) {
    if (event.target.files) {
      for (let i = 0; i < 10 && i < event.target.files.length; i++) {
        // var reader = new FileReader();
        let imgTarget = event.target.files[i];
        const fd = new FormData();
        fd.append('file1', imgTarget);

        // send `POST` request
        (async () => {
          let img = (
            await fetch('https://api.pets-like.com/img-v1/upload', {
              method: 'POST',
              body: fd,
            }).then((res) => res.json())
          ).list[0].url;
          this.imagestoShow.push(img);
        })();
      }
    }
  }

  deleteImage(url) {
    this.imagestoShow.forEach((value, index) => {
      if (value == url) this.imagestoShow.splice(index, 1);
    });
  }

  onproductUpload() {
    this.authRequest
      .request$(
        'POST',
        'https://api.pets-like.com/d1',
        '/contents/0',
        {},
        {
          category: this.selectedValue,
          subject: this.subject,
          images: this.imagestoShow,
          text: this.message,
          tags: '',
          extra: ' price: 0',
        }
      )
      .pipe(toArray())
      .subscribe((res) => {});
  }
}
