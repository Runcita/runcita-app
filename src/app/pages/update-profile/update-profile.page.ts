import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../models/City";
import {AlertController, ModalController} from "@ionic/angular";
import {Profile} from "../../models/Profile";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {SearchCityPage} from "../search-city/search-city.page";
import {RunningLevelPage} from "../running-level/running-level.page";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  @Input() profile: Profile;
  public customActionSheetSexe: object = {
    header: 'Selectionnez votre sexe',
  };
  public choiceBirthday: string;
  public profileUpdated: Profile;

  constructor(private modalController: ModalController, private camera: Camera, private alertController: AlertController) { }

  public dismissModalUpdateProfile(): void {
    this.modalController.dismiss();
  }

  public async presentAlertCamera(isCover: boolean): Promise<void> {
    const alert = await this.alertController.create({
      header : (isCover) ? 'Photo de couverture' : 'Photo de profile',
      buttons: [
        {
          text: 'choisir une photo',
          role: 'ok',
          handler: () => {
            this.changePicture(isCover, 'library');
          }
        },
        {
          text: 'Prendre une photo',
          handler: () => {
            this.changePicture(isCover, 'camera');
          }
        }
      ]
    });

    await alert.present();
  }

  public updateProfile(): void {
    this.profile = this.profileUpdated;
    this.profile.birthday = new Date(this.choiceBirthday).getTime();
    console.log(this.profile)
    this.dismissModalUpdateProfile();
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.profileUpdated.city = Object.assign(new City(), {
      name: data.city.name,
      code: data.city.code
    });
  }

  public async modalRunningLevel(): Promise<void> {
    const modal = await this.modalController.create({
      component: RunningLevelPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.profileUpdated.runningLevel = data.runningLevel;
  }

  private async changePicture(isCover: boolean, source: string): Promise<void> {
    const image: string = (source === 'library') ? await this.openLibrary() : await this.openCamera();
    if(isCover) {
      this.profileUpdated.cover = 'data:image/jpg;base64,' + image;
    }else{
      this.profileUpdated.picture = 'data:image/jpg;base64,' + image;
    }
  }

  private async openCamera(): Promise<string> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  private async openLibrary(): Promise<string> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  ngOnInit() {
    this.choiceBirthday = new Date(this.profile.birthday).toISOString().substr(0,10);
    console.log(this.choiceBirthday)
    this.profileUpdated = Object.assign(new Profile(), {
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      sexe: this.profile.sexe,
      description: this.profile.description,
      runningLevel: this.profile.runningLevel,
      picture: this.profile.picture,
      cover: this.profile.cover,
      city: this.profile.city
    });
  }

}
