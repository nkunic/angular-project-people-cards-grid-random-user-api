import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CardModel } from '../model/card.model';

@Component({
  selector: 'app-people-card-container',
  templateUrl: './people-card-container.component.html',
  styleUrls: ['./people-card-container.component.scss'],
})
export class PeopleCardContainerComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.results[0];
    });
  }

  getUser() {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.results[0];
    });
  }
}
