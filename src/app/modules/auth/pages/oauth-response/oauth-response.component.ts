import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Observable, ReplaySubject, switchMap} from 'rxjs';
import {LemonAuthService} from "@core/services/lemon-auth.service";

@Component({
    selector: 'lemon-oauth-response',
    templateUrl: './oauth-response.component.html',
    styleUrls: ['./oauth-response.component.scss'],
})
export class OauthResponseComponent implements OnInit, OnDestroy, AfterViewInit {
    public routeParams: Params;
    public data;
    public isDisabled = true;
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: LemonAuthService,
    ) {
        // Error case
        // 'http://localhost:4200/auth/oauth-response' +
        // '?error_description=Permissions%20error;%20error%3Daccess_denied;%20error_code%3D200;%20error_reason%3Duser_denied' +
        // '&error=access_denied#_=_'
        // Success
        // 'http://localhost:4200/auth/oauth-response' +
        // '?code=....'
    }

    ngOnInit() {
        this.routeParams = this.activatedRoute.snapshot.queryParams;
        this.data = this.activatedRoute.snapshot.data;
        this.checkLoginResult();
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    ngAfterViewInit() {
        this.toggleIsDisabled();
    }

    logout() {
        this.router.navigate(['/auth/logout']);
    }

    checkLoginResult() {
        const { code, provider } = this.routeParams;
        const isSuccess = typeof code === 'string' && code.length > 5;
        if (isSuccess) {
            // 아래 성공하면 profile$에 데이터 들어옴
          this.authService.createCredentialsByProvider$(provider, code).pipe(
            switchMap(() => this.authService.getUserProfile$())
          ).subscribe(profile => {
            // NOTE: save profile to global state
            console.log('LEMON PROFILE: ', profile);
            this.router.navigate(['/main']);
          })
          return;
        }
        // Error occurred!
        this.router.navigate(['/auth/login']);
        return;
    }

    private toggleIsDisabled() {
        setTimeout(() => (this.isDisabled = false), 5000);
    }
}
