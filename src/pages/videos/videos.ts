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
  renderObj: any = {}

  videos: any = {
    olhos: {
      title: 'Olhos',
      icon: './assets/icon/olhos.png',
      toRender: [
        {
          id: 'exame',
          title: 'Exame dermatoneurológico',
          srcs: [
            {
              subtitle: 'Fechar olhos com força',
              src: './assets/videos/video8.mp4'
            },
            {
              subtitle: 'Diminuição da sensibilidade da córnea',
              src: './assets/videos/video9.mp4'
            },
            {
              subtitle: 'Acuidade visual',
              src: './assets/videos/video10.mp4'
            }
          ]
        }
      ],
    },

    maos: {
      title: 'Mãos',
      icon: './assets/icon/maos.png',
      toRender: [
        {
          id:'avalia',
          title: 'Avaliação da força muscular',
          srcs: [
            {
              subtitle: 'Abrir dedo mínimo',
              src: './assets/videos/video1.mp4'
            },
            {
              subtitle: 'Elevar o polegar',
              src: './assets/videos/video2.mp4'
            },
            {
              subtitle: 'Elevar o punho',
              src: './assets/videos/video3.mp4'
            }
          ]
        },
        {
          id:'sensibilidade',
          title: 'Teste de sensibilidade',
          srcs: [
            {
              subtitle: 'Verifique os pontos de inspeção',
              src: './assets/videos/video6.mp4'
            }
          ]
        }
      ]
    },
    pes: {
      title: 'Pés',
      icon: './assets/icon/pes.png',
      toRender: [
      {
        id:'avalia',
        title: 'Avaliação da força muscular',
        srcs: [
          {
            subtitle: 'Elevar o hálux',
            src: './assets/videos/video4.mp4'
          },
          {
            subtitle: 'Elevar o pé',
            src: './assets/videos/video5.mp4'
          },
        ]
      },
      {
        id:'sensibilidade',
        title: 'Teste de sensibilidade',
        srcs: [
          {
            subtitle: 'Verifique os pontos de inspeção',
            src: './assets/videos/video7.mp4'
          }
        ]
      }
    ]
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.renderObj = this.videos[this.navParams.get('exam')];
  }

  ionViewDidLoad() {
  }

  openVideo(video){
    let obj = this.renderObj.toRender.filter( el => el.id == video )[0];
    obj.icon = this.renderObj.icon;
    let videoModal = this.modalCtrl.create(ModalPage,obj);
    videoModal.present();
  }

}
