import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {LemonAuthService} from "./lemon-auth.service";
import {environment} from "@env/environment";

export interface UploadFileResponse {
    list: UploadedFile[];
}

export interface UploadedFile {
    contentLength?: number;
    contentType?: string;
    createdAt: number;
    deletedAt?: number;
    hash?: string;
    height?: number;
    id: string;
    name?: string;
    ns?: string;
    origin?: string;
    type?: string;
    updatedAt?: number;
    width?: number;
    _id?: string;
    url?: string;
}

@Injectable({
    providedIn: 'root',
})
export class ImageApiService {
    constructor(private httpClient: LemonAuthService) {}

    uploadImage$(image: File): Observable<UploadedFile | null> {
        if (!environment.production && environment.env === 'local') {
            return of({ id: 'test', url: 'https://picsum.photos/200/300' } as UploadedFile);
        }

        if (!image) {
            return throwError('@image is required');
        }
        const form = new FormData();
        form.append('file', image);

        return this.httpClient.requestFormData$('POST', environment.imageEndpoint, '/upload', {}, form).pipe(
            map((res) => res as UploadFileResponse),
            map(({ list }) => {
                const isError = !list || !list.length || list.length === 0;
                if (isError) {
                    alert('Error occurred');
                    return null;
                }
                const [imageInfo] = list;
                return imageInfo as UploadedFile;
            }),
            catchError((err) => {
                alert('Error occurred');
                return throwError(err);
            })
        );
    }
}
