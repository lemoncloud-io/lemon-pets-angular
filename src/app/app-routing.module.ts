import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutDefaultComponent} from "./layout/@default/default.component";

const routes: Routes = [
    {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        component: LayoutDefaultComponent,
    },
    {
        path: 'community',
        loadChildren: () => import('./modules/community/community.module').then(m => m.CommunityModule),
        component: LayoutDefaultComponent,
    },
    {
        path: 'main',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
        component: LayoutDefaultComponent,
    },
    {
        path: '**',
        redirectTo: 'main'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
