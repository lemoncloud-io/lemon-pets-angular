import { Component, OnDestroy, OnInit } from '@angular/core';
import { Content } from './productData.model';
import { PetsApiService } from '@core/services/pets-api.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  DEFAULT_IMAGE = './assets/dog_profile.png';
  fetchedContents: Content;
  fetchedMoreproducts = [];

  user: {
    id: number;
    name: string;
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private petsApiService: PetsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };
    // const defaultParams = { page: 0, limit: 10 };
    this.petsApiService
      .fetchproduct$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((list) => {
        this.fetchedContents = list;
        console.log(this.fetchedContents);
      });

    const MoreParams = { page: 1, limit: 4 };
    this.petsApiService
      .fetchMoreproduct$(MoreParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((list) => {
        this.fetchedMoreproducts = list;
        console.log(this.fetchedMoreproducts);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
