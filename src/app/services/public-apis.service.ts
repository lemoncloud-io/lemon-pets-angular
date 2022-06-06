import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicApisService {
  constructor(private http: HttpClient) {}

  language = new Subject<string>();
  uploadedProfileimage = new Subject();

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
}
