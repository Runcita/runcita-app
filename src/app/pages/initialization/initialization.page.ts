import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentification.service';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.page.html',
  styleUrls: ['./initialization.page.scss'],
})
export class InitializationPage implements OnInit {

  private alreadyOpenApp: string = 'alreadyOpenApp';

  constructor(private router: Router, private storage: Storage, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getJwtStorage().subscribe(
        () => {
          this.authenticationService.loadCurrentUser().subscribe(() => {
            // autentification true => redirect home
            this.router.navigate(['/home']);
          });
        }, () => {
          this.storage.get(this.alreadyOpenApp).then((alreadyOpenApp) => {
            console.log('toto', alreadyOpenApp);
            if (alreadyOpenApp) {
              // autentification false & already open app => redirect login
              this.router.navigate(['/signin']);
            } else {
              // autentification false & already open app => redirect introduction
              this.storage.set(this.alreadyOpenApp, true);
              this.router.navigate(['/introduction']);
            }
          });
        }
    );
  }

}
