import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { OauthResponseComponent } from './pages/oauth-response/oauth-response.component';


@NgModule({
    declarations: [LoginComponent, LogoutComponent, OauthResponseComponent],
    imports: [
        AuthRoutingModule,
    ],
})
export class AuthModule {}
