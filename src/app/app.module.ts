import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';
import { SymptomsPage } from '../pages/symptoms/symptoms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SymptomsProvider } from '../providers/symptoms-provider/symptoms-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HowToUsePage,
    ReferencesPage,
    AboutPage,
    SymptomsPage
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
    SymptomsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SymptomsProvider
  ]
})
export class AppModule {}
