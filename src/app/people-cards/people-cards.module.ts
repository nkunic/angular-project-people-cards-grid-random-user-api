import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PeopleCardContainerComponent } from './container/people-card-container.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    PeopleCardContainerComponent,
    PeopleCardComponent,
    CardComponent,
  ],
  providers: [],
  exports: [PeopleCardContainerComponent],
})
export class PeopleCardsModule {}
