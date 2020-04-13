import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {City} from "../../models/City";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: User = Object.assign(new User(), {
    id: 1,
    lastName: 'Landschoot',
    firstName: 'Tony',
    mail: 'tony.landschoot@outlook.com',
    description: '20yo, Lille, 2* semi et actuellement en prepa marathon',
    picture: '../../assets/mock/profile.jpg',
    sexe: false,
    runningLevel: 'gazelle',
    birthday: '1999-04-13',
    city: Object.assign(new City(), {name: 'Lille', code: '452', postalCodes: ['59000']})
  });

  constructor() { }

  public newNote(note: number): void {
    console.log(note);
  }

  ngOnInit() {}

}
