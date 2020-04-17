import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  public confirmDelete: string;

  constructor(private modalController: ModalController) { }

  public dismissModalDeleteAccount(): void {
    this.modalController.dismiss();
  }

  public deleteAccount() {
    // effectuer la requete
  }

  ngOnInit() {
  }

}
