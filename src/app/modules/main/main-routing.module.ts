import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {DetailPage} from "./pages/detail/detail.page";
import {TestPage} from "@app/modules/main/pages/test/test.page";
import {Test2Page} from "@app/modules/main/pages/test2/test2.page";

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
        path: 'test',
        component: TestPage,
        outlet: 'test'
    },
    {
        path: 'test2',
        component: Test2Page,
        outlet: 'test'
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
