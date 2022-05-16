import { Injectable } from '@angular/core';
import {environment} from "@env/environment";

@Injectable({
    providedIn: 'root',
})
export class UtilsService {

    isLocalEnv() {
        return !environment.production && environment.env === 'local';
    }

    deleteUndefinedProperty(query: any): object {
        Object.keys(query).forEach(
            (key) => (query[key] === undefined || query[key] === '' || query[key] === null) && delete query[key]
        );
        return query;
    }

}
