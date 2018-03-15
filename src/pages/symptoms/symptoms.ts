import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SymptomsProvider } from '../../providers/symptoms-provider/symptoms-provider';
import { HansTypeProvider } from '../../providers/hans-type/hans-type';

import { SensibilityTestPage } from '../../pages/sensibility-test/sensibility-test';
import { HansTypePage } from '../../pages/hans-type/hans-type';


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
    public symptomsProvider: SymptomsProvider,
    public hansTypeProvider: HansTypeProvider
  ) {}

  ionViewDidLoad() {
    this.renderObj = this.symptomsProvider.getRenderObj()
  }

  //To SensibilityTestPage
  toTest(){
    this.navCtrl.push(SensibilityTestPage);
  }

  //open the hansTypePage by id
  openHansType(type){
    this.hansTypeProvider.setRenderObj(type);
    this.navCtrl.push(HansTypePage);
  }
}
