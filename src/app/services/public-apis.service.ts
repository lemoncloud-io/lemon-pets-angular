import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicApisService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://api.pets-like.com/d1/public/list-tags';
    return this.http.get(url);
  }

  getLanguage() {
    let url = 'https://api.pets-like.com/d1/public/list-languages';
    return this.http.get(url);
  }

  getCategories() {
    let url = 'https://api.pets-like.com/d1/public/list-tags';
    return this.http.get(url);
  }
}
