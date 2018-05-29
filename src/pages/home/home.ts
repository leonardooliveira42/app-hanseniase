import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemsTypePage } from '../items-type/items-type';
import { GenericPage } from '../generic/generic';

import { ItemsTypeProvider } from '../../providers/items-type/items-type';
import { GenericProvider } from '../../providers/generic/generic';
import { NavChangeProvider } from '../../providers/nav-change/nav-change';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  options: Array<{id: string, title: string, subtitle: string, icon: string, component: any}> = [
    {
      id: 'eh',
      title: 'o que é',
      subtitle: '',
      icon: './assets/icon/o-que-e.png',
      component: GenericPage
    },
    {
      id: 'fazer',
      title: 'o que fazer',
      subtitle: '',
      icon: './assets/icon/o-que-fazer.png',
      component: ItemsTypePage
    },
    {
      id: 'sinais',
      title: 'sinais e sintomas',
      subtitle: '',
      icon: './assets/icon/sinais.png',
      component: ItemsTypePage
    }
  ];

  constructor(
    public navCtrl: NavController,
    public itemsTypeProvider: ItemsTypeProvider,
    public genericProvider: GenericProvider,
    public navChangeProvider: NavChangeProvider
  ) { }


  ionViewDidLeave(){
    this.navChangeProvider.emitNavChangeEvent(true);
  }

  ionViewDidEnter(){
    this.navChangeProvider.emitNavChangeEvent(false);
  }

  openPage(option){
    this.navCtrl.push(option.component);

    //in case of option is about symptoms
    if(option.id == 'eh'){
      this.genericProvider.setRenderObj(option.id);
    }else{
      this.itemsTypeProvider.setRenderObj(option.id);
    }
  }


}
