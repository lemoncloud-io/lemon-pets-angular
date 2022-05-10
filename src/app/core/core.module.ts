import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { ToastService } from './services/toast.service';

const SERVICES = [
    ToastService,
];

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [...SERVICES],
})
export class CoreModule implements EnsureModuleLoadedOnceGuard {}
