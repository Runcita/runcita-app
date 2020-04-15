import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {City} from "../../models/City";
import {ModalController} from "@ionic/angular";
import {FollowersPage} from "../../pages/followers/followers.page";
import {Profile} from "../../models/Profile";
import {RunningLevel} from "../../models/RunningLevel";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    @Input() idUser: number;
    public profile: Profile;
    public nbSubscriber: number = 34;
    public nbSubscription: number = 46;
    public subscriber: boolean = false;
    public myProfil: boolean = true;

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

    ngOnInit() {
    // MOCK
    this.profile = Object.assign(new Profile(), {
        lastName: 'Landschoot',
        firstName: 'Tony',
        description: '20yo, Lille, 2* semi et actuellement en prepa marathon',
        picture: '../../assets/mock/profile.jpg',
        cover: '../../assets/mock/lille.jpg',
        sexe: false,
        runningLevel: Object.assign(new RunningLevel(), {name: 'gazelle'}),
        birthday: 924035243699,
        city: Object.assign(new City(), {name: 'Lille', code: '452', postalCodes: ['59000']})
    });
    // appel api pour récuperer le user via this.id
    // vérifier si le profil de l'auth {Auth.id = user.id}
    // récuperer nombre abonnement
    // récuperer nombre abonnés
    }

}
