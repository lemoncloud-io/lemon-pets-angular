import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { LemonAuthService } from '@app/core/services/lemon-auth.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicApisService {
  constructor(private http: HttpClient, private lemonAuth: LemonAuthService) {}

  language = new Subject<string>();
  filterSubject = new BehaviorSubject<string>('');
  uploadedProfileimage = new BehaviorSubject<any>('');
  dataBus: any = {};
  dataBus2: any = [];

  // API call to get list of language
  getLanguage() {
    return this.http.get(
      environment.petsApiEndpoint + '/public/list-languages'
    );
  }

  // API call to get list of tags
  getListTags() {
    return this.http.get(environment.petsApiEndpoint + '/public/list-tags');
  }

  // API call to get list of Categories
  getlistCategory() {
    return this.http.get(
      environment.petsApiEndpoint + '/public/list-categories'
    );
  }

  // Function for profile image
  setProfileImage(profileImage) {
    this.dataBus['imageDetails'] = profileImage;
  }

  getPrfileImage() {
    return this.dataBus['imageDetails'];
  }
}
