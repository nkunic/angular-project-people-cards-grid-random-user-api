import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './container/card-container.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardContainerComponent,
    CardComponent,
  ],
  providers: [],
  exports: [CardContainerComponent],
})
export class PeopleCardsModule {}
