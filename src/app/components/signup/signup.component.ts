import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user = new User();
  confirmPassword = '';
  logForm() {
    console.log(this.user);
  }
  constructor() {}

  ngOnInit() {}
}
