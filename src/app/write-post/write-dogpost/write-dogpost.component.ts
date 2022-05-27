import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../../services/public-apis.service';

@Component({
  selector: 'app-write-dogpost',
  templateUrl: './write-dogpost.component.html',
  styleUrls: ['./write-dogpost.component.scss'],
})
export class WriteDogpostComponent implements OnInit {
  listCategories: any = [];
  language: 'en';
  selectedTopic = '';
  selectedValue = '';
  uploadedImage = [];

  constructor(private action: PublicApisService) {
    this.action.getCategories().subscribe((data) => {
      this.listCategories = data;
      console.log(this.listCategories);
    });
  }

  applyTopic() {
    return (this.selectedValue = this.selectedTopic);
  }

  uploadImage() {}

  getUserFormData(data: any) {}

  ngOnInit(): void {}
}
