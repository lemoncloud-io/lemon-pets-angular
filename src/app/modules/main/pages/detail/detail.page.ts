import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";

@Component({
    selector: 'app-detail-page',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {

    constructor(private navController: NavController,
                private modalController: ModalController) { }

    ngOnInit(): void {
    }

    onClickGoBack() {
        this.navController.pop();
    }

    dismissModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }

    onClickNavigate() {
        this.navController.navigateForward('main/test');
    }
}
