import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav
  rootPage:any;
  firstRun: boolean = true;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDH4Pk0RXwW9NpGiOeLEyPY9HDK_D8SAIg",
      authDomain: "iittechfestcglearnbook-f73d6.firebaseapp.com",
      databaseURL: "https://iittechfestcglearnbook-f73d6.firebaseio.com",
      projectId: "iittechfestcglearnbook-f73d6",
      storageBucket: "iittechfestcglearnbook-f73d6.appspot.com",
      messagingSenderId: "150488178728"
    };
    firebase.initializeApp(config);
  }

  ngAfterViewInit() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated.
        this.setRootPage('HomePage');
      } else {
        // User is not authenticated.
        this.setRootPage(LoginPage);
      }
    });
  }

  setRootPage(page) {

    if (this.firstRun) {

      // if its the first run we also have to hide the splash screen
      this.nav.setRoot(page)
      .then(() => this.platform.ready())
      .then(() => {

        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.firstRun = false;
      });
    } else {
      this.nav.setRoot(page);
    }
  }
}

