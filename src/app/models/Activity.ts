import {City} from "./City";
import {RunningType} from "./RunningType";
import {RunningLevel} from "./RunningLevel";
import {User} from "./User";

export class Activity {
    id: number;
    date: number;
    description: string;
    after: boolean;
    city: City;
    runningType: RunningType;
    runningLevel: RunningLevel;
    organiser: User;
    participants: Array<User>;
}
