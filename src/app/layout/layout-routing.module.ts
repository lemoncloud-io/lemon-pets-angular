import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutTabsComponent} from "./@tabs/tabs.component";
import {LayoutBlankComponent} from "./@blank/blank.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutTabsComponent,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../modules/profile/profile.module').then(m => m.ProfileModule),
            },
            {
                path: 'community',
                loadChildren: () => import('../modules/community/community.module').then(m => m.CommunityModule),
            },
            {
                path: 'main',
                loadChildren: () => import('../modules/main/main.module').then(m => m.MainModule),
            },
            {
                path: '**',
                redirectTo: 'profile',
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'profile',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
