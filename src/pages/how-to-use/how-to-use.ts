import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { NavChangeProvider } from '../../providers/nav-change/nav-change';

/**
 * Generated class for the HowToUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-how-to-use',
  templateUrl: 'how-to-use.html',
})
export class HowToUsePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public navChangeProvider: NavChangeProvider) {

  }

  showStartButton: boolean = false;

  ionViewDidLoad() {
  }

  ionViewDidEnter(){
    this.storage.get('introShown').then((result) => {
      if(result){
        this.showStartButton = false;
      } else {
        this.showStartButton =  true;
        this.navChangeProvider.emitNavChangeEvent(false);
      }
    });
  }

  goToHome(){
    this.storage.set('introShown',true);
    this.navCtrl.setRoot(HomePage)
  }
}
