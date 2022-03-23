import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
})
export class CardContainerComponent implements OnInit {
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
