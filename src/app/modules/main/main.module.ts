import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MainRoutingModule} from "./main-routing.module";
import {ProductsComponent} from "./pages/products/products.component";


@NgModule({
    imports: [
        SharedModule,
        MainRoutingModule,
    ],
    declarations: [
        ProductsComponent,
    ]
})
export class MainModule {}
