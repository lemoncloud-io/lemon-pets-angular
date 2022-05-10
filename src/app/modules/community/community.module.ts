import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CommunityComponent} from "./pages/community/community.component";
import {CommunityRoutingModule} from "./community-routing.module";


@NgModule({
    imports: [
        SharedModule,
        CommunityRoutingModule,
    ],
    declarations: [
        CommunityComponent,
    ]
})
export class CommunityModule {}
