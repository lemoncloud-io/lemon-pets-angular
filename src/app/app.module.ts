import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ProductsComponent } from './products/products.component';
import { CommunityComponent } from './community/community.component';
import { MyPageComponent } from './my-page/my-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { DogComponent } from './categories/dog/dog.component';
import { CatComponent } from './categories/cat/cat.component';
import { EtcComponent } from './categories/etc/etc.component';
import { MainComponent } from './main/main.component';
import { WritePostComponent } from './write-post/write-post.component';
import { WriteCatpostComponent } from './write-post/write-catpost/write-catpost.component';
import { WriteDogpostComponent } from './write-post/write-dogpost/write-dogpost.component';
import { WriteEtcPostComponent } from './write-post/write-etc-post/write-etc-post.component';
import {CoreModule} from "@core/core.module";
import { HttpClientModule } from '@angular/common/http';

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
    DogComponent,
    CatComponent,
    EtcComponent,
    MainComponent,
    WritePostComponent,
    WriteCatpostComponent,
    WriteDogpostComponent,
    WriteEtcPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
