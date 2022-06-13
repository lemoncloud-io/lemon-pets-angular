import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WriteCatpostComponent } from './write-post/write-catpost/write-catpost.component';
import { WriteDogpostComponent } from './write-post/write-dogpost/write-dogpost.component';
import { WriteEtcPostComponent } from './write-post/write-etc-post/write-etc-post.component';
import { WritePostComponent } from './write-post/write-post.component';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    ProductsComponent,
    WritePostComponent,
    WriteCatpostComponent,
    WriteDogpostComponent,
    WriteEtcPostComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, DragulaModule.forRoot()],
})
export class MainModule {}
