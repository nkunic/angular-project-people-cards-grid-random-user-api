import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardContainerComponent } from './container/card-container.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    CardContainerComponent,
    CardComponent,
  ],
  providers: [],
  exports: [PeopleCardContainerComponent],
})
export class PeopleCardsModule {}
