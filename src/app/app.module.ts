import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { GenericPage } from '../pages/generic/generic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SymptomsProvider } from '../providers/symptoms-provider/symptoms-provider';
import { GenericProvider } from '../providers/generic/generic';
import { NavChangeProvider } from '../providers/nav-change/nav-change';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HowToUsePage,
    ReferencesPage,
    AboutPage,
    SymptomsPage,
    GenericPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HowToUsePage,
    ReferencesPage,
    AboutPage,
    SymptomsPage,
    GenericPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SymptomsProvider,
    GenericProvider,
    NavChangeProvider
  ]
})
export class AppModule {}
