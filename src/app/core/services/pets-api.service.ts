import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {LemonAuthService} from "./lemon-auth.service";
import {UtilsService} from "./utils.service";
import {environment} from "@env/environment";
import {delay} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PetsApiService {
  private isLocal: boolean = true;

  constructor(
    private httpClient: LemonAuthService,
    private utils: UtilsService,
    private mockClient: HttpClient
  ) {
    this.isLocal = this.utils.isLocalEnv();
  }

  fetchContents$(params: Params) {
    if (this.isLocal) {
      const url = 'assets/json/contents.json';
      return this.mockClient.get(url).pipe(delay(200));
    }

    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents',
      this.utils.deleteUndefinedProperty(params)
    );
  }

}
