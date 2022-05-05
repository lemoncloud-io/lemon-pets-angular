import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {component: CommunityComponent, path: 'community'},
  {component: MyPageComponent, path: 'mypage'},
  {component: ProductsComponent, path: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
