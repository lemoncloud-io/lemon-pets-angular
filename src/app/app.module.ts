import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CoreModule } from "./core/core.module";
import { RouteReuseStrategy } from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        IonicModule.forRoot(),
        CoreModule,
        LayoutModule,
        SharedModule,
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
