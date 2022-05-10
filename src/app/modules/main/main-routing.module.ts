import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {DetailPage} from "./pages/detail/detail.page";

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: 'detail',
        component: DetailPage,
    },
    {
        path: '**',
        redirectTo: 'products'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
