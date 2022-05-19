import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './categories/cat/cat.component';
import { DogComponent } from './categories/dog/dog.component';
import { EtcComponent } from './categories/etc/etc.component';
import { CommunityComponent } from './community/community.component';
import { MainComponent } from './main/main.component';
import { MyPageComponent } from './my-page/my-page.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { WriteCatpostComponent } from './write-post/write-catpost/write-catpost.component';
import { WriteDogpostComponent } from './write-post/write-dogpost/write-dogpost.component';
import { WriteEtcPostComponent } from './write-post/write-etc-post/write-etc-post.component';
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  { component: CommunityComponent, path: 'community', canActivate: [AuthGuard], },
  { component: MyPageComponent, path: 'mypage', canActivate: [AuthGuard], },
  { component: ProductsComponent, path: 'product', canActivate: [AuthGuard], },
  { component: MainComponent, path: 'main', canActivate: [AuthGuard], },
  { component: EditProfileComponent, path: 'editProfile', canActivate: [AuthGuard], },
  { component: NotificationComponent, path: 'notification', canActivate: [AuthGuard], },
  { component: CatComponent, path: 'cat', canActivate: [AuthGuard], },
  { component: DogComponent, path: 'dog', canActivate: [AuthGuard], },
  { component: EtcComponent, path: 'etc', canActivate: [AuthGuard], },
  { component: WriteCatpostComponent, path: 'writecatpost', canActivate: [AuthGuard], },
  { component: WriteDogpostComponent, path: 'writedogpost', canActivate: [AuthGuard], },
  { component: WriteEtcPostComponent, path: 'writeetcpost', canActivate: [AuthGuard], },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
