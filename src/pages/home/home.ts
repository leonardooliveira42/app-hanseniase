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
      title: 'o que é a doença hanseníase?',
      subtitle: '',
      icon: './assets/icon/o-que-e.png',
      component: GenericPage
    },
    {
      id: 'sinais',
      title: 'sinais e sintomas',
      subtitle: '',
      icon: './assets/icon/sinais.png',
      component: ItemsTypePage
    },
    {
      id: 'fazer',
      title: 'o que fazer na suspeita?',
      subtitle: '',
      icon: './assets/icon/lupa.png',
      component: ItemsTypePage
    },
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
