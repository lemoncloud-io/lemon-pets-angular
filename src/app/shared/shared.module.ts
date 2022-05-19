import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from '@shared/components/loader/loader.component';

const COMPONENTS = [
    LoaderComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [...COMPONENTS],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ...COMPONENTS,
    ],
})
export class SharedModule {}
