import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

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

  renderObj: any = {};
  _imageViewerCtrl: ImageViewerController;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public genericProvider: GenericProvider,
    public imageViewerCtrl: ImageViewerController
  ) { this._imageViewerCtrl = imageViewerCtrl;}



  ionViewDidLoad() {
    this.renderObj = this.genericProvider.getRenderObj();
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
