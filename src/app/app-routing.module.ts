import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './modules/community/community.component';
import { MainComponent } from './modules/main/main.component';
import { MyPageComponent } from './modules/my-page/my-page.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { EditProfileComponent } from './modules/edit-profile/edit-profile.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { ProductsComponent } from './modules/main/products/products.component';
import { WriteCatpostComponent } from './modules/main/write-post/write-catpost/write-catpost.component';
import { WriteDogpostComponent } from './modules/main/write-post/write-dogpost/write-dogpost.component';
import { WriteEtcPostComponent } from './modules/main/write-post/write-etc-post/write-etc-post.component';

const routes: Routes = [
  {
    component: CommunityComponent,
    path: 'community',
    canActivate: [AuthGuard],
  },
  { component: MyPageComponent, path: 'mypage', canActivate: [AuthGuard] },
  {
    component: ProductsComponent,
    path: 'product/:id',
    canActivate: [AuthGuard],
  },
  { component: MainComponent, path: '', canActivate: [AuthGuard] },
  {
    component: EditProfileComponent,
    path: 'editProfile',
    canActivate: [AuthGuard],
  },
  {
    component: NotificationComponent,
    path: 'notification',
    canActivate: [AuthGuard],
  },
  {
    component: WriteCatpostComponent,
    path: 'writecatpost',
    canActivate: [AuthGuard],
  },
  {
    component: WriteDogpostComponent,
    path: 'writedogpost',
    canActivate: [AuthGuard],
  },
  {
    component: WriteEtcPostComponent,
    path: 'writeetcpost',
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
