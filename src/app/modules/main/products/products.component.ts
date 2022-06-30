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
  fetchedMoreProducts = [];
  fetchedRelatedProducts = [];

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
    this.petsApiService
      .fetchproduct$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((list) => {
        this.fetchedContents = list;
      });

    const MoreParams = { page: 1, limit: 4 };
    this.petsApiService
      .fetchMoreProduct$(MoreParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        this.fetchedMoreProducts = list;
      });

    this.petsApiService
      .fetchRelatedProduct$(MoreParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        this.fetchedRelatedProducts = list;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
