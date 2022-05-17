import { Component, OnDestroy, OnInit } from '@angular/core';
import { LemonAuthService } from '@core/services/lemon-auth.service';
import { ReplaySubject } from 'rxjs';

@Component({
    selector: 'lemon-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    public pageTitle = 'LOGIN';
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private authService: LemonAuthService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    loginSocial(provider: string) {
        this.authService.loginWithProvider(provider);
    }

}
