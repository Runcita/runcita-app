import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  @Input() user: User;
  public follow: boolean = false;
  public myProfil: boolean = true;

  constructor() {}

  public getAge(timestamp: number): number {
    let date = new Date(timestamp);
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  ngOnInit() {}

}
