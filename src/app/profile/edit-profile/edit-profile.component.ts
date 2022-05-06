import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  ChangeProfile = "프로필 변경";
  
  constructor() {

  }
  
  ngOnInit(): void {
  }
  
}
