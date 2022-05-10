import { Component, OnInit } from '@angular/core';
import {IonNav, ModalController } from "@ionic/angular";

@Component({
    selector: 'app-test-page',
    templateUrl: './test.page.html',
    styleUrls: ['./test.page.scss']
})
export class TestPage implements OnInit {
    level = 0;
    nextPage = TestPage;

    constructor(
        private modalController: ModalController,
        private modalNavController: IonNav,
    ) { }

    ngOnInit() {
    }

    onClickGoBack() {
        this.modalNavController.pop();
    }

    goForward() {
        this.modalNavController.push(this.nextPage, { level: this.level + 1 });
    }

    dismissModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }


}
