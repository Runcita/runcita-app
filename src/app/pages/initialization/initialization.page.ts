import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services/authentification.service';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.page.html',
  styleUrls: ['./initialization.page.scss'],
})
export class InitializationPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.checkSignin();
  }

}
