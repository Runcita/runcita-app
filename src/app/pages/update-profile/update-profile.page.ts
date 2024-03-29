import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../_models/City";
import {AlertController, ModalController} from "@ionic/angular";
import {User} from "../../_models/User";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {SearchCityPage} from "../search-city/search-city.page";
import {RunningLevelPage} from "../running-level/running-level.page";
import {RunningLevel} from "../../_models/RunningLevel";
import {FormControl, Validators} from "@angular/forms";
import {ErrorMatcherService} from "../../_services/error-matcher.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  @Input() user: User;
  public customActionSheetSexe: object = {
    header: 'Selectionnez votre sexe',
  };
  public choiceBirthday: Date;
  public userUpdated: User;

  public nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ-]+'),
    Validators.minLength(2)
  ]);
  public firstNameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ-]+'),
    Validators.minLength(2)
  ]);
  public cityFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public sexeFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public birthdayFormControl = new FormControl('', [
    Validators.required
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

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
    this.user = this.userUpdated;
    this.user.birthday = this.choiceBirthday.getTime();
    console.log(this.user)
    this.dismissModalUpdateProfile();
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.userUpdated.city = Object.assign(new City(), {
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
    this.userUpdated.runningLevel = Object.assign(new RunningLevel(), {
        id: data.runningLevel.id,
        name: data.runningLevel.name
    });
  }

  private async changePicture(isCover: boolean, source: string): Promise<void> {
    const image: string = (source === 'library') ? await this.openLibrary() : await this.openCamera();
    isCover ? this.userUpdated.cover = 'data:image/jpg;base64,' + image : this.userUpdated.picture = 'data:image/jpg;base64,' + image;
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
    this.choiceBirthday = new Date(this.user.birthday);
    this.userUpdated = Object.assign(new User(), {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      sexe: this.user.sexe,
      description: (this.user.description === null) ? '' : this.user.description,
      runningLevel: (this.user.runningLevel === null) ? Object.assign(new RunningLevel(), {name: 'default'}) : this.user.runningLevel,
      picture: (this.user.picture === null) ? '../../assets/mock/default-profile.png' : this.user.picture,
      cover: (this.user.cover === null) ? '../../assets/mock/default-banner.png' : this.user.cover,
      city: (this.user.city === null) ? new City() : this.user.city
    });
  }

}
