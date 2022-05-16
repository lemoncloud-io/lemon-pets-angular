import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import {LemonAuthService} from "./services/lemon-auth.service";
import {ImageApiService} from "./services/image-api.service";
import {PetsApiService} from "./services/pets-api.service";
import {AuthGuard} from "./guards/auth.guard";
import {UtilsService} from "@core/services/utils.service";
import {WindowService} from "@core/services/window.service";

const SERVICES = [
  LemonAuthService,
  ImageApiService,
  PetsApiService,
  UtilsService,
  WindowService,
];

const GUARDS = [AuthGuard];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [...GUARDS, ...SERVICES],
})
export class CoreModule implements EnsureModuleLoadedOnceGuard {}
