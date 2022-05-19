import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {LoaderService} from "@core/services/loader.service";

@Component({
    selector: 'pets-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
    @Input() borderColor = '#7c4dff';
    isLoading$: Subject<boolean> = this.loaderService.isLoading$;

    constructor(private loaderService: LoaderService) {}
}
