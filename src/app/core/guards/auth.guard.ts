import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { environment } from '@env/environment';
import { LemonAuthService } from '@core/services/lemon-auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private router: Router,
        private authService: LemonAuthService
    ) {}

    canLoad() {
        return this.guardAuthenticated();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.guardAuthenticated();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.guardAuthenticated();
    }

    private guardAuthenticated(): Observable<boolean> {
        return this.authService.hasCredentialsAndAuthenticated$().pipe(
            map((isAuth) => {
                if (!isAuth) {
                    this.router.navigate(['/']);
                    return false;
                }
                return true;
            }),
            catchError(() => {
                this.router.navigate(['/']);
                return of(false);
            })
        );
    }
}
