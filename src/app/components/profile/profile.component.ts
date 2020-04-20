import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../_models/User';
import {City} from "../../_models/City";
import {ModalController} from "@ionic/angular";
import {FollowersPage} from "../../pages/followers/followers.page";
import {RunningLevel} from "../../_models/RunningLevel";
import {UpdateProfilePage} from "../../pages/update-profile/update-profile.page";
import {Activity} from "../../_models/Activity";
import {RunningType} from "../../_models/RunningType";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {


    @Input() public profile: User;
    public nbSubscriber: number = 34;
    public nbSubscription: number = 46;
    public subscriber: boolean = false;
    public myProfil: boolean = true;
    public recentsActivities: Array<Activity> = [];

    constructor(public modalController: ModalController) {}

    public getAge(timestamp: number): number {
        let date = new Date(timestamp);
        let diff = Date.now() - date.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    public async modalSubscriber(): Promise<void> {
        const modal = await this.modalController.create({
            component: FollowersPage,
            componentProps : {
                myFollow : false,
                profile : this.profile
            },
            swipeToClose: true
        });
        return await modal.present();
    }

    public async modalSubscription(): Promise<void> {
        const modal = await this.modalController.create({
            component: FollowersPage,
            componentProps : {
                myFollow : true,
                profile : this.profile
            },
            swipeToClose: true
        });
        return await modal.present();
    }

    public async modaleUpdateProfile(): Promise<void> {
        const modal = await this.modalController.create({
            component: UpdateProfilePage,
            componentProps : {
                profile : this.profile
            },
            swipeToClose: true
        });
        return await modal.present();
    }

    ngOnInit() {
    // MOCK
    this.recentsActivities = [
        Object.assign(new Activity(), {
            id: 1,
            date: 2341414531344,
            oldState: true,
            description: 'Petit footing au soir pour se détendre',
            after: true,
            city: Object.assign(new City(), {name: 'Lille'}),
            runningType: Object.assign(new RunningType(), {id: 1, name: 'Fractionné'}),
            runningLevel: Object.assign(new RunningLevel(), {name: 'lapin'}),
            organiser: Object.assign(new User(), {
                id: 1,
                profile: Object.assign(new User(), {
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
        }),
        Object.assign(new Activity(), {
            id: 1,
            date: 2341414531344,
            oldState: true,
            description: 'Séance fractionnée du matin',
            after: false,
            city: Object.assign(new City(), {name: 'Lille'}),
            runningType: Object.assign(new RunningType(), {id: 1, name: 'Fractionné'}),
            runningLevel: Object.assign(new RunningLevel(), {name: 'panthere'}),
            organiser: Object.assign(new User(), {
                id: 1,
                profile: Object.assign(new User(), {
                    lastName: 'Landschoot',
                    firstName: 'Ludovic',
                    description: '20yo, Lille, 2* semi et actuellement en prepa marathon',
                    picture: '../../assets/mock/lille.jpg',
                    cover: '../../assets/mock/lille.jpg',
                    sexe: false,
                    runningLevel: Object.assign(new RunningLevel(), {name: 'gazelle'}),
                    birthday: 924035243699,
                    city: Object.assign(new City(), {name: 'Lille', code: '452', postalCodes: ['59000']})
                })
            }),
            participants: []
        }),
    ];
    // appel api pour récuperer le user via this.id
    // vérifier si le profil de l'auth {Auth.id = user.id}
    // récuperer nombre abonnement
    // récuperer nombre abonnés
    }

}
