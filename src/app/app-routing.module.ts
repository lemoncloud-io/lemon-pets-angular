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

const routes: Routes = [
  { component: CommunityComponent, path: 'community' },
  { component: MyPageComponent, path: 'mypage' },
  { component: ProductsComponent, path: 'product' },
  { component: MainComponent, path: 'main' },
  { component: EditProfileComponent, path: 'editProfile' },
  { component: NotificationComponent, path: 'notification' },
  { component: CatComponent, path: 'cat' },
  { component: DogComponent, path: 'dog' },
  { component: EtcComponent, path: 'etc' },
  { component: WriteCatpostComponent, path: 'writecatpost' },
  { component: WriteDogpostComponent, path: 'writedogpost' },
  { component: WriteEtcPostComponent, path: 'writeetcpost' },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
