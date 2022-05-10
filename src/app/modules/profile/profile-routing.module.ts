import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {MyPageComponent} from "./pages/my-page/my-page.component";

const routes: Routes = [
    {
        path: 'edit',
        component: EditProfileComponent,
    },
    {
        path: '',
        component: MyPageComponent,
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
