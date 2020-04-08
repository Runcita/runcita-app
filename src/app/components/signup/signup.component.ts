import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public user: User = new User();
  public confirmPassword: string = '';
  public customActionSheetOptions: any = {
    header: 'Selectionnez votre sexe',
  };

  public signup(): void {
    console.log(this.user);
  }

  constructor() {}

  ngOnInit() {}
}
