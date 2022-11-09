import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
