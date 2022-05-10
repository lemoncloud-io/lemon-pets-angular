import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './categories/cat/cat.component';
import { DogComponent } from './categories/dog/dog.component';
import { EtcComponent } from './categories/etc/etc.component';
import { CommunityComponent } from './community/community.component';
import { MyPageComponent } from './my-page/my-page.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const routes: Routes = [
  { component: CommunityComponent, path: 'community' },
  { component: MyPageComponent, path: 'mypage' },
  { component: ProductsComponent, path: 'main' },
  { component: EditProfileComponent, path: 'editProfile' },
  { component: NotificationComponent, path: 'notification' },
  { component: CatComponent, path: 'cat' },
  { component: DogComponent, path: 'dog' },
  { component: EtcComponent, path: 'etc' },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
