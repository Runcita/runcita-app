import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() {}

  public user: User = new User();

  public signin(): void {
    console.log(this.user);
  }

  ngOnInit() {
  }

}
