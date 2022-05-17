import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import { AuthService as LemonCoreService, LemonOAuthTokenResult, LemonOptions } from '@lemoncloud/lemon-front-lib';

import { from, Observable, Subject, timer } from 'rxjs';
import { filter, finalize, retry, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import {environment} from "@env/environment";
import {WindowService} from "./window.service";
import {UtilsService} from "./utils.service";

export const REFRESH_POLLING_TIME = 1000 * 60 * 5;

const LEMON_CORE_OPTION = {
    project: environment.project.toLocaleLowerCase(),
    oAuthEndpoint: environment.oAuthEndpoint,
};

@Injectable({
    providedIn: 'root',
})
export class LemonAuthService {
    private coreService: LemonCoreService;
    private oAuthEndpoint: string;
    private redirectUrl: string;

    private refreshCredentials$: Observable<AWS.Credentials | null>;
    private stopPolling$ = new Subject();

    constructor(private windowService: WindowService, private utils: UtilsService) {
        this.oAuthEndpoint = environment.oAuthEndpoint;
        this.redirectUrl = environment.redirectUrl;
        this.coreService = new LemonCoreService(LEMON_CORE_OPTION);
        this.refreshCredentials$ = timer(1, REFRESH_POLLING_TIME).pipe(
            switchMap(() => this.getCredential$()),
            filter((credentials) => !!credentials),
            retry(),
            share(),
            takeUntil(this.stopPolling$)
        );
    }

    pollingCredentials$(): Observable<AWS.Credentials | null> {
        return this.refreshCredentials$.pipe(
            tap(() =>
                console.log(`polling credentials every ${Math.floor(REFRESH_POLLING_TIME / 60 / 1000)} minutes...`)
            )
        );
    }

    request(method: string = 'GET', endpoint: string, path: string, params?: any, body?: any) {
        return this.coreService.request(method, endpoint, path, params, body);
    }

    request$(method: string = 'GET', endpoint: string, path: string, params?: any, body?: any) {
        return from(this.request(method, endpoint, path, params, body));
    }

    requestWithCredentials(method: string = 'GET', endpoint: string, path: string, params?: any, body?: any) {
        return this.coreService.requestWithCredentials(method, endpoint, path, params, body);
    }

    requestWithCredentials$(method: string = 'GET', endpoint: string, path: string, params?: any, body?: any) {
        return from(this.requestWithCredentials(method, endpoint, path, params, body));
    }

    buildCredentialsByToken(data: LemonOAuthTokenResult) {
        return this.coreService.buildCredentialsByToken(data);
    }

    buildCredentialsByToken$(data: LemonOAuthTokenResult) {
        return from(this.buildCredentialsByToken(data));
    }

    buildCredentialsByStorage() {
        return this.coreService.buildCredentialsByStorage().catch(() => null);
    }

    buildCredentialsByStorage$() {
        return from(this.coreService.buildCredentialsByStorage());
    }

    isAuthenticated() {
        return this.coreService.isAuthenticated().catch(() => false);
    }

    isAuthenticated$() {
        return from(this.isAuthenticated());
    }

    logout() {
        return this.coreService.logout();
    }

    logout$() {
        return from(this.coreService.logout());
    }

    getCredential() {
        return this.coreService.getCredentials();
    }

    getCredential$() {
        return from(this.getCredential());
    }

    getUserProfile$() {
        return from(this.getUserProfile());
    }

    getUserProfile() {
        return this.requestWithCredentials('GET', this.oAuthEndpoint, '/user/0/profile');
    }

    createCredentialsByProvider(provider: string = 'kakao', code: string) {
        return this.request('POST', this.oAuthEndpoint, `/oauth/${provider}/token`, {}, { code }).then(
            (token: LemonOAuthTokenResult) => this.buildCredentialsByToken(token)
        );
    }

    createCredentialsByProvider$(provider: string = 'kakao', code: string) {
        return from(this.createCredentialsByProvider(provider, code));
    }

    loginWithProvider(provider: string = 'kakao') {
        this.windowService.windowRef.location.replace(
            `${this.oAuthEndpoint}/oauth/${provider}/authorize?redirect=${this.redirectUrl}`
        );
    }

    getSavedTokenData() {
        return this.coreService.getSavedToken().then((data) => this.utils.deleteUndefinedProperty(data));
    }

    getSavedTokenData$() {
        return from(this.getSavedTokenData());
    }

    setLemonCoreOptions(options: LemonOptions) {
        this.coreService.setLemonOptions(options);
    }

    async hasCredentialsAndAuthenticated(): Promise<boolean> {
        const isAuth = await this.isAuthenticated().catch(() => false);
        if (isAuth) {
            return isAuth; // already get credentials
        }
        const savedToken = await this.getSavedTokenData();
        if (this.isEmptyObject(savedToken)) {
            return false;
        }
        const hasNull = Object.values(savedToken).some((value) => !value);
        if (hasNull) {
            return false;
        }
        let credentials = await this.getCredential();
        if (!credentials) {
            credentials = await this.buildCredentialsByStorage().catch(() => null);
        }
        if (!credentials) {
            return false;
        }
        return await this.isAuthenticated().catch(() => false);
    }

    hasCredentialsAndAuthenticated$(): Observable<boolean> {
        return from(this.hasCredentialsAndAuthenticated());
    }

    requestFormData$(method: string = 'POST', endpoint: string, path: string, params?: any, body?: any) {
        const extraHeader = {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'multipart/form-data',
        };
        this.setLemonCoreOptions({ ...LEMON_CORE_OPTION, extraHeader });
        return this.request$(method, endpoint, path, params, body).pipe(
            finalize(() => this.setLemonCoreOptions({ ...LEMON_CORE_OPTION }))
        );
    }

    private isEmptyObject(obj: object) {
        return (
            Object.getOwnPropertyNames(obj).length === 0 &&
            Object.getOwnPropertySymbols(obj).length === 0 &&
            Object.getPrototypeOf(obj) === Object.prototype
        );
    }
}
