import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToastWrongRequest(messageToast: string): Promise<void> {
    const toast = await this.toastController.create({
      message: messageToast,
      duration: 2000,
      position: 'top',
      color: 'dark',
      keyboardClose: true,
    });
    await toast.present();
  }
}
