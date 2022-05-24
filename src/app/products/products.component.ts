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
  fetchedContents: any = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private petsApiService: PetsApiService) {
    this.petsApiService.fetchproduct().subscribe(({ list }) => {
      this.fetchedContents = list;
      console.log(this.fetchedContents);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
