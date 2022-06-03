import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BottombarComponent } from './shared/components/bottombar/bottombar.component';
import { ProductsComponent } from './modules/products/products.component';
import { CommunityComponent } from './modules/community/community.component';
import { MyPageComponent } from './modules/my-page/my-page.component';
import { EditProfileComponent } from './modules/edit-profile/edit-profile.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { MainComponent } from './modules/main/main.component';
import { WritePostComponent } from './modules/write-post/write-post.component';
import { WriteCatpostComponent } from './modules/write-post/write-catpost/write-catpost.component';
import { WriteDogpostComponent } from './modules/write-post/write-dogpost/write-dogpost.component';
import { WriteEtcPostComponent } from './modules/write-post/write-etc-post/write-etc-post.component';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BottombarComponent,
    ProductsComponent,
    CommunityComponent,
    MyPageComponent,
    EditProfileComponent,
    NotificationComponent,
    MainComponent,
    WritePostComponent,
    WriteCatpostComponent,
    WriteDogpostComponent,
    WriteEtcPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
