import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// pages
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';
import { SensibilityTestPage } from '../pages/sensibility-test/sensibility-test';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Como usar', component: HowToUsePage },
      { title: 'Teste de Sensibilidade', component: SensibilityTestPage},
      { title: 'Referências', component: ReferencesPage },
      { title: 'Sobre', component: AboutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
