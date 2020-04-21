import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../_models/City";
import {ModalController} from "@ionic/angular";
import {User} from "../../_models/User";
import {OtherProfilePage} from "../other-profile/other-profile.page";

@Component({
  selector: 'app-follow',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  @Input() subscription: boolean;
  @Input() user: User;
  public users: Array<User> = [];

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
      Object.assign(new User(), {
        lastName: 'Liagre',
        firstName: 'Justine',
        id: '0',
        picture: '../../assets/mock/profile.jpg'
      }),
      Object.assign(new User(), {
        lastName: 'Landschoot',
        firstName: 'Alicia',
        id: '1',
        picture: '../../assets/mock/profile.jpg'
      }),
      Object.assign(new User(), {
        lastName: 'Landschoot',
        firstName: 'Ludovic',
        id: '4',
        picture: '../../assets/mock/profile.jpg'
      })
    ];
  }

}
