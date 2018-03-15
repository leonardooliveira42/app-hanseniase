import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SymptomsProvider } from '../../providers/symptoms-provider/symptoms-provider';
import { SensibilityTestPage } from '../../pages/sensibility-test/sensibility-test';

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
  renderObj: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public symptomsProvider: SymptomsProvider
  ) {}

  ionViewDidLoad() {
    this.renderObj = this.symptomsProvider.getRenderObj()
  }

  //To SensibilityTestPage
  toTest(){
    this.navCtrl.push(SensibilityTestPage);
  }
}
