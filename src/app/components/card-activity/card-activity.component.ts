import { Component, OnInit } from '@angular/core';
import {Activity} from "../../models/Activity";
import {City} from "../../models/City";
import {RunningType} from "../../models/RunningType";
import {RunningLevel} from "../../models/RunningLevel";
import {User} from "../../models/User";
import {Profile} from "../../models/Profile";

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss'],
})
export class CardActivityComponent implements OnInit {

  public activity: Activity;

  constructor() { }

  public dateToFrench(dateTimestamp: number): string {
    const month: Array<string> = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
    const date: Date = new Date(dateTimestamp);
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`;
  }

  ngOnInit() {
    this.activity = Object.assign(new Activity(), {
      id: 1,
      date: 2341414531344,
      description: 'Petit footing au soir pour se détendre',
      after: true,
      city: Object.assign(new City(), {name: 'Lille'}),
      runningType: Object.assign(new RunningType(), {id: 1, name: 'Fractionné'}),
      runningLevel: Object.assign(new RunningLevel(), {name: 'lapin'}),
      organiser: Object.assign(new User(), {
        id: 1,
        profile : Object.assign(new Profile(), {
          lastName: 'Landschoot',
          firstName: 'Tony',
          description: '20yo, Lille, 2* semi et actuellement en prepa marathon',
          picture: '../../assets/mock/profile.jpg',
          cover: '../../assets/mock/lille.jpg',
          sexe: false,
          runningLevel: Object.assign(new RunningLevel(), {name: 'gazelle'}),
          birthday: 924035243699,
          city: Object.assign(new City(), {name: 'Lille', code: '452', postalCodes: ['59000']})
        })
      }),
      participants: []
    });
  }

}
