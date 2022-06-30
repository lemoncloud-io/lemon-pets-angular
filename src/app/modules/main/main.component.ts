import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Content } from './items.model';
import { PetsApiService } from '@core/services/pets-api.service';
import { takeUntil, filter } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { PublicApisService } from '@app/core/services/public-apis.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  DEFAULT_IMAGE = './assets/dog_profile.png';

  fetchedContents: Content[] = [];
  changesLanguage = '';
  filterString: string;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private petsApiService: PetsApiService,
    private action: PublicApisService
  ) {
    this.action.filterSubject.subscribe((res) => {
      this.filterString = res;
    });
  }

  ngOnInit(): void {
    const defaultParams = { page: 0, limit: 10 };
    this.petsApiService
      .fetchContents$(defaultParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ list }) => {
        this.fetchedContents = list;
        console.log(this.fetchedContents);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  sendProductId() {}
}
