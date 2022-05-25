import { Component, OnDestroy, OnInit } from '@angular/core';
import { Content } from './productData.model';
import { PetsApiService } from '@core/services/pets-api.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  DEFAULT_IMAGE = './assets/dog_profile.png';
  fetchedContents: Content[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private petsApiService: PetsApiService) {}

  ngOnInit(): void {
    const defaultParams = { page: 0, limit: 10 };
    this.petsApiService
      .fetchContents$(defaultParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        console.log(list);
        this.fetchedContents = list;
      });

    const MoreParams = { page: 1, limit: 4 };
    this.petsApiService
      .fetchMoreproduct$(MoreParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        console.log(list);
        this.fetchedContents = list;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
