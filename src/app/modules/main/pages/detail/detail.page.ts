import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-detail-page',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {

    constructor(private navController: NavController) { }

    ngOnInit(): void {
    }

    onClickGoBack() {
        this.navController.pop();
    }
}
