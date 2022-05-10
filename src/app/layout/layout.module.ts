import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";

// *******************************************************************************
// Layouts
import {LayoutBlankComponent} from "./@blank/blank.component";
import {BottombarComponent} from "./components/bottombar/bottombar.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {LayoutTabsComponent} from "./@tabs/tabs.component";
import {LayoutRoutingModule} from "./layout-routing.module";

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
        LayoutBlankComponent,
        LayoutTabsComponent,
        BottombarComponent,
        NavbarComponent,
        SidebarComponent,
    ],
    providers: [],
})
export class LayoutModule {}
