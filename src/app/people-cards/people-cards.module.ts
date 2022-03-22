import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardContainerComponent } from './container/people-card-container.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [PeopleCardContainerComponent, PeopleCardComponent],
  exports: [PeopleCardContainerComponent],
})
export class PeopleCardsModule {}
