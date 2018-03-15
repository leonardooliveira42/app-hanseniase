import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GenericProvider } from '../../providers/generic/generic';

/**
 * Generated class for the GenericPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generic',
  templateUrl: 'generic.html',
})
export class GenericPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public genericProvider: GenericProvider
  ) { }

  renderObj: any = {};

  ionViewDidLoad() {
    this.renderObj = this.genericProvider.getRenderObj();
  }

}
