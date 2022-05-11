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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
