import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  renderObj: any = {src: '',title: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
     this.renderObj.src = navParams.get('src');
     this.renderObj.title = navParams.get('title');
  }

  ionViewDidLoad() {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
