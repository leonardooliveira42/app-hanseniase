import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideosPage } from '../videos/videos';


/**
 * Generated class for the ExamTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exam-type',
  templateUrl: 'exam-type.html',
})

export class ExamTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  openCategory(type){
    this.navCtrl.push(VideosPage,{exam: type});
  }

}
