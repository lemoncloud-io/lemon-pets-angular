import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LemonAuthService } from './lemon-auth.service';
import { UtilsService } from './utils.service';
import { environment } from '@env/environment';
import { delay, Subject } from 'rxjs';
import { Content } from '../../modules/main/products/productData.model';

@Injectable({
  providedIn: 'root',
})
export class PetsApiService {
  private isLocal: boolean = true;
  productId = new Subject<number>();
  idofProduct: number = 1000471;

  constructor(
    private httpClient: LemonAuthService,
    private utils: UtilsService,
    private http: HttpClient
  ) {
    this.isLocal = this.utils.isLocalEnv();
  }

  fetchContents$(params: Params) {
    // if (this.isLocal) {
    //   const url = 'assets/json/contents.json';
    //   return this.mockClient.get(url).pipe(delay(200));
    // }

    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents',
      this.utils.deleteUndefinedProperty(params)
    );
  }

  fetchproduct$() {
    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents/' + this.idofProduct
    );
  }

  fetchMoreproduct$(params: Params) {
    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents/1000387/more'
    );
  }

  uploadProductImages$() {
    return this.httpClient.request$(
      'POST',
      environment.petsApiEndpoint,
      '/contents/0'
    );
  }
}
