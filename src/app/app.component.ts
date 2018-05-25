import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// pages
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';

import { NavChangeProvider } from '../providers/nav-change/nav-change';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  showFooter: boolean = false;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navChangeProvider: NavChangeProvider
  ) {
    this.initializeApp();

    //ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Como usar', component: HowToUsePage },
      { title: 'Bibliografia', component: ReferencesPage },
      { title: 'Criação e Apoio', component: AboutPage },
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

  ngOnInit(){
    this.navChangeProvider.getNavChangeEmitter()
      .subscribe(item => {this.showFooter =  item});
  }

  openPage(page) {
    if(page.title == 'Início'){
      this.nav.popToRoot();
    }else{
      this.nav.push(page.component);
    }
  }

  goToRoot(){
    this.nav.popToRoot();
  }

}
