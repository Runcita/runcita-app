import {City} from "./City";

export class User {
    id: number;
    lastName: string;
    firstName: string;
    mail: string;
    password: string;
    description: string;
    picture: string;
    sexe: boolean;
    runningLevel: string;
    birthday: number;
    city: City;
}
