import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {User} from "../../_models/User";
import {UserService} from "../../_services/user.service";
import {ToastService} from "../../_services/toast.service";

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  @Input() idUser: number;
  public user: User;

  constructor(public modalController: ModalController, private userService: UserService, private toastService: ToastService) { }

  public dismissModalFollowers(): void {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
    }, error => {
      this.toastService.presentToastWrongRequest('Une erreur est survenue lors de la récupération du profile');
    });
  }

}
