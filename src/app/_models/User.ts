import {City} from './City';
import {RunningLevel} from './RunningLevel';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    sexe: boolean;
    description: string;
    picture: string;
    cover: string;
    birthday: number;
    city: City;
    runningLevel: RunningLevel;
}
