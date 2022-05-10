import { Component } from '@angular/core';
import { Platform } from "@ionic/angular";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'lemon-pets-angular';
    check:boolean=false;

    constructor(private platform: Platform) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => console.log('TODO: initialize app'));
    }


    myfunction(){
        if(this.check==false){
            this.check=true;
        }
        else{
            this.check=false;
        }
    }
}
