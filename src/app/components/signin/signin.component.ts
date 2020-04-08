import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  user = new User();
  logForm() {
    console.log(this.user);
  }
  constructor() { }

  ngOnInit() {}

}
