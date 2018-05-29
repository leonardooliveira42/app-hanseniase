import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';
import { GenericPage } from '../pages/generic/generic';
import { ItemsTypePage } from '../pages/items-type/items-type';
import { VideosPage } from '../pages/videos/videos';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GenericProvider } from '../providers/generic/generic';
import { ItemsTypeProvider } from '../providers/items-type/items-type';
import { NavChangeProvider } from '../providers/nav-change/nav-change';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HowToUsePage,
    ReferencesPage,
    AboutPage,
    GenericPage,
    ItemsTypePage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HowToUsePage,
    ReferencesPage,
    AboutPage,
    GenericPage,
    ItemsTypePage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GenericProvider,
    NavChangeProvider,
    ItemsTypeProvider
  ]
})
export class AppModule {}
