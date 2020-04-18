import {Component, Input, OnInit} from '@angular/core';
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

  @Input() public activity: Activity;

  constructor() { }

  public dateToFrench(dateTimestamp: number): string {
    const month: Array<string> = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
    const date: Date = new Date(dateTimestamp);
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`;
  }

  ngOnInit() {
  }

}
