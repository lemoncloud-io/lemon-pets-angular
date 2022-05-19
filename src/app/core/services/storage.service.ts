import { Injectable } from '@angular/core';
import { WindowService } from '@core/services/window.service';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private localStorage: Storage;

    constructor(private windowService: WindowService) {
        this.localStorage = windowService.windowRef.localStorage;
    }

    get(key: string) {
        if (!this.isLocalStorageSupported) {
            return null;
        }
        if (!this.localStorage.getItem(key)) {
            return null;
        }

        const itemStr = this.localStorage.getItem(key);
        const item = JSON.parse(itemStr);
        if (!item.hasOwnProperty('expiry')) {
            // support previous version
            return item;
        }

        const now = new Date();
        const isExpired = item.expiry !== 0 && now.getTime() > item.expiry;
        if (isExpired) {
            this.localStorage.removeItem(key);
            return null;
        }
        return JSON.parse(item.value);
    }

    set(key: string, value: any, ttl?: number): boolean {
        if (!this.isLocalStorageSupported) {
            return false;
        }

        let expiry = 0; // persist
        if (ttl) {
            const now = new Date();
            expiry = now.getTime() + ttl;
        }
        const item = { value: JSON.stringify(value), expiry };
        this.localStorage.setItem(key, JSON.stringify(item));
        return true;
    }

    remove(key: string): boolean {
        if (!this.isLocalStorageSupported) {
            return false;
        }

        this.localStorage.removeItem(key);
        return true;
    }

    clear(shouldKeepKeys: string[] = []) {
        if (!this.isLocalStorageSupported) {
            return false;
        }

        const items = this.keepItems(shouldKeepKeys);
        this.localStorage.clear();
        // reset origins
        if (items.length > 0) {
            items.forEach(({ key, item }) => this.set(key, item));
        }
        return true;
    }

    get isLocalStorageSupported(): boolean {
        return !!this.localStorage;
    }

    private keepItems(keys: string[]) {
        let items = [];
        if (keys.length > 0) {
            items = keys.map((key) => {
                const item = this.get(key);
                return { key, item };
            });
        }
        return items;
    }
}
