import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length == 0 || filterString === '') {
      return value;
    }

    const fetchedContents = [];
    for (const content of value) {
      if (content['subject'] === filterString) {
        fetchedContents.push(content);
      }
    }
    return fetchedContents;
  }
}
