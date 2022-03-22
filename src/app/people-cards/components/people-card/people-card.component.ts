import { Component, Input } from '@angular/core';
import { CardModel } from '../../model/card.model';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss'],
})
export class PeopleCardComponent {
  @Input() card: CardModel;
  @Input() imgRatio: '1-1' | '16-9' = '1-1';

  faAngleRight = faAngleRight;
}
