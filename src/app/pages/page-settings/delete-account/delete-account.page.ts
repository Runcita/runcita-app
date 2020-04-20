import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormControl, Validators} from '@angular/forms';
import {ErrorMatcherService} from '../../../_services/error-matcher.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  public confirmDelete: string;

  public confirmFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('SUPPRIMER'),
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(private modalController: ModalController) { }

  public dismissModalDeleteAccount(): void {
    this.modalController.dismiss();
  }

  public deleteAccount(): void {
    // effectuer la requete
  }

  ngOnInit() {
  }

}
