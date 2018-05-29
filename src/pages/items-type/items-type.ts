import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GenericPage } from '../generic/generic';
import { VideosPage } from '../videos/videos';


import { ItemsTypeProvider } from '../../providers/items-type/items-type';
import { GenericProvider } from '../../providers/generic/generic';

/**
 * Generated class for the ItemsTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-items-type',
  templateUrl: 'items-type.html',
})
export class ItemsTypePage {

  renderObj: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemsTypeProvider: ItemsTypeProvider,
    public genericProvider: GenericProvider
  ) {}

  ionViewDidLoad() {
    this.renderObj = this.itemsTypeProvider.getRenderObj()
  }

  openItemType(item){
    if(item.clickable){
      this.genericProvider.setRenderObj(item.id);
      if(item.id == "exame"){
        this.navCtrl.push(VideosPage);
      }else{
        this.genericProvider.setRenderObj(item.id);
        this.navCtrl.push(GenericPage);
      }
    }
  }

}
