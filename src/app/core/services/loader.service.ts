import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    isLoading$ = new Subject<boolean>();

    show(delay: number = 0) {
        this.isLoading$.next(true);
        if (delay > 0) {
            setTimeout(() => this.hide(), delay);
        }
    }

    hide() {
        this.isLoading$.next(false);
    }
}
