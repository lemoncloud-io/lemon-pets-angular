import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../../../core/services/toast.service";
import {Router} from "@angular/router";
import {RouterService} from "../../../../core/services/router.service";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {DetailPage} from "../detail/detail.page";
import {Test2Page} from "@app/modules/main/pages/test2/test2.page";
import {TestPage} from "@app/modules/main/pages/test/test.page";
import {ModalBaseComponent} from "@shared/components/modal-base/modal-base.component";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    // modal: HTMLElement;

    constructor(private toastService: ToastService,
                private routerService: RouterService,
                public modalController: ModalController,
                private routerOutlet: IonRouterOutlet
                ) {
    }

    ngOnInit(): void {
    }

    async onClickShowOff() {
        // await this.toastService.presentToast('TEST');
        this.routerService.navigateTo('main/detail');
    }

    async onClickDetail() {
        const modal = await this.modalController.create({
            component: ModalBaseComponent,
            componentProps: {
                rootPage: TestPage,
            },
            canDismiss: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

}
