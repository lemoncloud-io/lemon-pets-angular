import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class RouterService {

    constructor(private navController: NavController) {}

    goBack() {
        this.navController.pop();
    }

    navigateTo(path: string) {
        this.navController.navigateForward(path);
    }

}
