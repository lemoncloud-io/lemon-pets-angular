import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {ProfileRoutingModule} from "./profile-routing.module";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {MyPageComponent} from "./pages/my-page/my-page.component";


@NgModule({
    imports: [
        SharedModule,
        ProfileRoutingModule,
    ],
    declarations: [
        MyPageComponent,
        EditProfileComponent,
    ]
})
export class ProfileModule {}
