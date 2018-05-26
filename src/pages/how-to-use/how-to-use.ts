import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

  }

  ionViewDidLoad() {
  }

  goToHome(){
    this.storage.set('introShown',true);
    this.navCtrl.setRoot(HomePage)
  }
}
