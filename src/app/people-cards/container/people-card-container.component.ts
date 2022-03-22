import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CardModel } from '../model/card.model';

@Component({
  selector: 'app-people-card-container',
  templateUrl: './people-card-container.component.html',
  styleUrls: ['./people-card-container.component.scss'],
})
export class PeopleCardContainerComponent implements OnInit {

  title = 'People Cards Grid';
  description =
    'Angular, Typescript, CSS variables, CSS grid, Flex, SCSS, Aspect ratio, Focus tab, Ellipsis block, Font awesome icons...';

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

  cards: CardModel[] = [
    {
      id: 1,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.',
    },
    {
      id: 2,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description:
        'Fusce viverra ullamcorper velit sed iaculis. Duis ultricies mauris non orci blandit, laoreet vulputate velit sagittis.',
    },
    {
      id: 3,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description:
        'Nunc vitae bibendum odio. Sed maximus elit sed massa eleifend sodales. Vivamus a pulvinar ex. Donec nec interdum libero. Etiam vitae risus et purus congue interdum. Nam malesuada commodo quam.',
    },
    {
      id: 4,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description:
        'Phasellus aliquet metus vitae dolor rutrum, at consectetur risus consequat. Ut in vestibulum ex. Nulla in orci lorem. Etiam non pretium justo. Proin sodales imperdiet felis, vitae porta est aliquet sit amet.',
    },
    {
      id: 5,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.',
    },
    {
      id: 6,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description:
        'Fusce viverra ullamcorper velit sed iaculis. Duis ultricies mauris non orci blandit, laoreet vulputate velit sagittis.',
    },
    {
      id: 7,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.',
    },
    {
      id: 8,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description:
        'Phasellus aliquet metus vitae dolor rutrum, at consectetur risus consequat. Ut in vestibulum ex. Nulla in orci lorem. Etiam non pretium justo. Proin sodales imperdiet felis, vitae porta est aliquet sit amet.',
    },
    {
      id: 9,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.',
    },
    {
      id: 10,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description:
        'Fusce viverra ullamcorper velit sed iaculis. Duis ultricies mauris non orci blandit, laoreet vulputate velit sagittis.',
    },
    {
      id: 11,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.',
    },
    {
      id: 12,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description:
        'Phasellus aliquet metus vitae dolor rutrum, at consectetur risus consequat. Ut in vestibulum ex. Nulla in orci lorem. Etiam non pretium justo. Proin sodales imperdiet felis, vitae porta est aliquet sit amet.',
    },
  ];
}
