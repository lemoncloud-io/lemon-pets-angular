import {Component, OnDestroy, OnInit} from '@angular/core';
import {Content, Items} from './items.model';
import {PetsApiService} from "@core/services/pets-api.service";
import {takeUntil} from "rxjs/operators";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  DEFAULT_IMAGE = './assets/dog_profile.png';
  items: Items[] = [
    new Items('Product1', '125', '12.12.2022'),
    new Items('Product2', '122', '14.12.2022'),
  ];
  fetchedContents: Content[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private petsApiService: PetsApiService) {}

  ngOnInit(): void {
    const defaultParams = { page: 0, limit: 10 };
    this.petsApiService.fetchContents$(defaultParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        console.log(list);
        this.fetchedContents = list;
      })
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
