import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CardModule } from '../card/card.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, CardModule, TranslateModule],
  exports: [SearchComponent],
})
export class SearchModule {}
