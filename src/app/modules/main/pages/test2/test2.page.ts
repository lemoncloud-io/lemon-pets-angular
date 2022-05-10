import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";

@Component({
    selector: 'app-test-page',
    templateUrl: './test2.page.html',
    styleUrls: ['./test2.page.scss']
})
export class Test2Page implements OnInit {

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


}
