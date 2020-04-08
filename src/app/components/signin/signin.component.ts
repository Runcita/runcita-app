import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  public user: User = new User();

  public signin(): void {
    console.log(this.user);
  }

  constructor() {}

  ngOnInit() {}

}
