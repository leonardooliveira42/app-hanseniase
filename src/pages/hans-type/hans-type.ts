import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HansTypeProvider } from '../../providers/hans-type/hans-type';

/**
 * Generated class for the HansTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hans-type',
  templateUrl: 'hans-type.html',
})
export class HansTypePage {
  renderObj: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hansTypeProvider: HansTypeProvider
  ) {}

  ionViewDidLoad() {
    this.renderObj = this.hansTypeProvider.getRenderObj();
  }

}
