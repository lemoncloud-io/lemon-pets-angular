import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {LemonAuthService} from "./lemon-auth.service";
import {UtilsService} from "./utils.service";
import {environment} from "@env/environment";

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

    fetchPets$(params: Params) {
        return this.httpClient.request$(
            'GET',
            environment.petsApiEndpoint,
            '/pets',
            this.utils.deleteUndefinedProperty(params)
        );
    }

}
