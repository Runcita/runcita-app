import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../models/City";
import {ModalController} from "@ionic/angular";
import {User} from "../../models/User";
import {OtherProfilePage} from "../other-profile/other-profile.page";
import {Profile} from "../../models/Profile";

@Component({
  selector: 'app-follow',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  @Input() subscription: boolean;
  @Input() profile: Profile;
  public users: Array<Profile> = [];

  constructor(public modalController: ModalController) { }

  public dismissModalSub(): void {
    this.modalController.dismiss();
  }

  public async modalOtherProfile(id: number): Promise<void> {
    const modal = await this.modalController.create({
      component: OtherProfilePage,
      componentProps : {
        idUser: id
      },
      swipeToClose: true
    });
    return await modal.present();
  }

  ngOnInit() {
    // récupere soit les abonnées soit les abonnements {this.myFollow}
    // MOCK
    this.users = [
      Object.assign(new Profile(), {
        lastName: 'Liagre',
        firstName: 'Justine',
        id: '2',
        picture: '../../assets/mock/profile.jpg'
      }),
      Object.assign(new Profile(), {
        lastName: 'Landschoot',
        firstName: 'Alicia',
        id: '3',
        picture: '../../assets/mock/profile.jpg'
      }),
      Object.assign(new Profile(), {
        lastName: 'Landschoot',
        firstName: 'Ludovic',
        id: '4',
        picture: '../../assets/mock/profile.jpg'
      })
    ];
  }

}
