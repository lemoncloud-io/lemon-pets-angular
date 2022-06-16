import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { LemonAuthService } from '@app/core/services/lemon-auth.service';

@Injectable({
  providedIn: 'root',
})
export class PublicApisService {
  constructor(private http: HttpClient, private lemonAuth: LemonAuthService) {}

  language = new Subject<string>();
  filterSubject = new Subject<string>();
  uploadedProfileimage = new BehaviorSubject<any>('');
  dataBus: any = {};

  getLanguage() {
    let url = 'https://api.pets-like.com/d1/public/list-languages';
    return this.http.get(url);
  }

  getListTags() {
    let url = 'https://api.pets-like.com/d1/public/list-tags';
    return this.http.get(url);
  }

  getlistCategory() {
    let url = 'https://api.pets-like.com/d1/public/list-categories';
    return this.http.get(url);
  }

  setProfileImage(profileImage) {
    this.dataBus['imageDetails'] = profileImage;
  }

  getPrfileImage() {
    return this.dataBus['imageDetails'];
  }
}
