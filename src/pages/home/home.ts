import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SymptomsPage } from '../symptoms/symptoms';
import { GenericPage } from '../generic/generic';

import { SymptomsProvider } from '../../providers/symptoms-provider/symptoms-provider';
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
      component: GenericPage
    },
    {
      id: 'neural',
      title: 'sinais e sintomas',
      subtitle: '',
      icon: './assets/icon/sinais.png',
      component: SymptomsPage
    }
    // {
    //   id: 'manchas',
    //   title: 'sinais e sintomas',
    //   subtitle: 'manchas',
    //   icon: './assets/icon/sinais-manchas.png',
    //   component: SymptomsPage
    // },
    // {
    //   id:'outros',
    //   title: 'outros sinais e sintomas',
    //   subtitle: '',
    //   icon: './assets/icon/outros.png',
    //   component: SymptomsPage
    // },
    // {
    //   id: 'profissional',
    //   title: 'se você não é um professional de saúde o que fazer',
    //   subtitle: '',
    //   icon: './assets/icon/ambulancia.png',
    //   component: GenericPage
    // },
    // {
    //   id: 'como',
    //   title: 'como usar o app?',
    //   subtitle: '',
    //   icon: './assets/icon/como-usar.png',
    //   component: HowToUsePage
    // },
    // {
    //   id: 'referencias',
    //   title: 'referências',
    //   subtitle: '',
    //   icon: './assets/icon/referencias.png',
    //   component: ReferencesPage
    // }
  ];

  constructor(
    public navCtrl: NavController,
    public symptomsProvider: SymptomsProvider,
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
    if(option.id == 'neural' || option.id == 'manchas' || option.id == 'outros'){
      this.symptomsProvider.setRenderObj(option.id);
    }else{
      this.genericProvider.setRenderObj(option.id);
    }
  }


}
