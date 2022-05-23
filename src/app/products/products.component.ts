import { Component, OnDestroy, OnInit } from '@angular/core';
import { Content } from '../main/items.model';
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
  id: number;
  name: string;

  fetchedContents: Content[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private petsApiService: PetsApiService) {}

  ngOnInit(): void {
    this.petsApiService
      .fetchproduct$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        console.log(list);
        this.fetchedContents = list;
        this.id = list[0].id;
        this.name = list[0].text;
        console.log(this.id);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
