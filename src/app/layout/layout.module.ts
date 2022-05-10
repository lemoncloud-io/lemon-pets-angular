import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";

// *******************************************************************************
// Layouts
import {BottombarComponent} from "./components/bottombar/bottombar.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {LayoutTabsComponent} from "./@tabs/tabs.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {ContentComponent} from "./@content/content.component";

// *******************************************************************************
// Components

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        LayoutRoutingModule,
    ],
    declarations: [
        LayoutTabsComponent,
        BottombarComponent,
        NavbarComponent,
        SidebarComponent,
        ContentComponent,
    ],
    providers: [],
})
export class LayoutModule {}
