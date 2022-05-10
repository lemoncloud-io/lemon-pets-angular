import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MainRoutingModule} from "./main-routing.module";
import {ProductsComponent} from "./pages/products/products.component";
import {DetailPage} from "./pages/detail/detail.page";


@NgModule({
    imports: [
        SharedModule,
        MainRoutingModule,
    ],
    declarations: [
        ProductsComponent,
        DetailPage,
    ]
})
export class MainModule {}
