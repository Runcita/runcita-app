import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  @Input() idUser: number;

  constructor(public modalController: ModalController) { }

  public dismissModalFollow(): void {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
