import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommunityComponent} from "./pages/community/community.component";

const routes: Routes = [
    {
        path: '',
        component: CommunityComponent,
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
export class CommunityRoutingModule {}
