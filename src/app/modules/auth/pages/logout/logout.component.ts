import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { LemonAuthService } from '@core/services/lemon-auth.service';

@Component({
    selector: 'lemon-auth-logout',
    templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit, OnDestroy, AfterViewInit {
    public isDisabled = true;
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(
        private authService: LemonAuthService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.logout();
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    ngAfterViewInit() {
        this.toggleIsDisabled();
    }

    logout() {
        this.authService.logout$().subscribe(() => this.router.navigate(['/']));
    }

    private toggleIsDisabled() {
        setTimeout(() => (this.isDisabled = false), 5000);
    }
}
