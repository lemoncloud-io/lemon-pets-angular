import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../../../core/services/toast.service";
import {Router} from "@angular/router";
import {RouterService} from "../../../../core/services/router.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    constructor(private toastService: ToastService,
                private routerService: RouterService) { }

    ngOnInit(): void {
    }

    async onClickShowOff() {
        await this.toastService.presentToast('TEST');
    }

    onClickDetail() {
        this.routerService.navigateTo('main/detail');
    }

}
