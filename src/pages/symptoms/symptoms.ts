import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SymptomsProvider } from '../../providers/symptoms-provider/symptoms-provider';

/**
 * Generated class for the SymptomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html',
})
export class SymptomsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public symptomsProvider: SymptomsProvider
  ) {}

  ionViewDidLoad() {
    console.log(this.symptomsProvider.getRenderObj());
  }

}
