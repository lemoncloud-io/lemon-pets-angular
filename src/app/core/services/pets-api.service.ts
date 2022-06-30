import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { LemonAuthService } from './lemon-auth.service';
import { UtilsService } from './utils.service';
import { environment } from '@env/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsApiService {
  private isLocal: boolean = true;
  productId = new Subject<number>();
  idofProduct: number = 1000471;

  constructor(
    private httpClient: LemonAuthService,
    private utils: UtilsService
  ) {
    this.isLocal = this.utils.isLocalEnv();
  }

  // API to fetch list of products

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

  // API to fetch product details
  fetchproduct$() {
    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents/' + this.idofProduct
    );
  }

  // API to fetch more products
  fetchMoreProduct$(params: Params) {
    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents/1000387/more'
    );
  }

  // API to ftech related products
  fetchRelatedProduct$(params: Params) {
    return this.httpClient.request$(
      'GET',
      environment.petsApiEndpoint,
      '/contents/1000387/related'
    );
  }

  // API to upload product images to the server
  uploadProductImages$() {
    return this.httpClient.request$(
      'POST',
      environment.petsApiEndpoint,
      '/contents/0'
    );
  }
}
