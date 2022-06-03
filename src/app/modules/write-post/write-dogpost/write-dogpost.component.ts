import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../../../services/public-apis.service';

@Component({
  selector: 'app-write-dogpost',
  templateUrl: './write-dogpost.component.html',
  styleUrls: ['./write-dogpost.component.scss'],
})
export class WriteDogpostComponent implements OnInit {
  listCategories: any = [];
  selectedTopic = '';
  selectedValue = '';
  imagestoShow = [];

  constructor(private action: PublicApisService) {
    this.action.getlistCategory().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  applyTopic() {
    return (this.selectedValue = this.selectedTopic);
  }

  uploadImage(event) {
    for (let img of event.target.files)
      this.imagestoShow.push({
        img,
        localUrl: window.URL.createObjectURL(img),
      });
  }

  getUserFormData(data: any) {}

  ngOnInit(): void {}
}
