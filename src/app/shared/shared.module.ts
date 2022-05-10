import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ModalBaseComponent} from "@shared/components/modal-base/modal-base.component";

const COMPONENTS = [
    ModalBaseComponent,
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ...COMPONENTS,
    ]
})
export class SharedModule {}
