import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { ModalPage } from '../modal/modal'

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  openVideo(source){
    let obj = {src: '', title: ''};
    if(source == 'muscular'){
      obj.src = './assets/imgs/movie.mp4';
      obj.title = 'Teste de força muscular'
    }else{
      obj.src = './assets/imgs/movie2.mp4';
      obj.title = 'Teste de Sensibilidade';
    }
    let videoModal = this.modalCtrl.create(ModalPage,{src: obj.src, title: obj.title});
    videoModal.present();
  }

}
