import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../models/City";
import {ModalController} from "@ionic/angular";
import {User} from "../../models/User";
import {OtherProfilePage} from "../other-profile/other-profile.page";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.page.html',
  styleUrls: ['./follow.page.scss'],
})
export class FollowPage implements OnInit {

  @Input() myFollow: boolean;
  @Input() user: User;
  public title: string;
  public users: Array<User> = [];

  constructor(public modalController: ModalController) { }

  public dismissModalFollow(): void {
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
    this.title = (this.myFollow) ? `Abonnements de ${this.user.firstName}` : `Abonnés de ${this.user.firstName}`;
    // récupere soit les abonnées soit les abonnements {this.myFollow}
    // MOCK
    this.users.push(Object.assign(new User(), {
      lastName: 'Liagre',
      firstName: 'Justine',
      id: '2',
      picture: '../../assets/mock/profile.jpg'
    }));
    this.users.push(Object.assign(new User(), {
      lastName: 'Landschoot',
      firstName: 'Alicia',
      id: '3',
      picture: '../../assets/mock/profile.jpg'
    }));
    this.users.push(Object.assign(new User(), {
      lastName: 'Landschoot',
      firstName: 'Ludovic',
      id: '4',
      picture: '../../assets/mock/profile.jpg'
    }));
  }

}
