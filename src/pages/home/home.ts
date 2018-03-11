import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: Array<{title: string, subtitle: string, icon: string}> = [
    {
      title: 'o que é',
      subtitle: '',
      icon: '../../assets/icon/o-que-e.png'
    },
    {
      title: 'o que fazer',
      subtitle: '',
      icon: '../../assets/icon/o-que-fazer.png'
    },
    {
      title: 'sinais e sintomas',
      subtitle: 'compromentimento neural',
      icon: '../../assets/icon/sinais.png'
    },
    {
      title: 'sinais e sintomas',
      subtitle: 'manchas',
      icon: '../../assets/icon/sinais-manchas.png'
    },
    {
      title: 'outros sinais e sintomas',
      subtitle: '',
      icon: '../../assets/icon/outros.png'
    },
    {
      title: 'se você não é um professional de saúde o que fazer',
      subtitle: '',
      icon: '../../assets/icon/ambulancia.png'
    },
    {
      title: 'como usar o app?',
      subtitle: '',
      icon: '../../assets/icon/como-usar.png'
    },
    {
      title: 'referências',
      subtitle: '',
      icon: '../../assets/icon/referencias.png'
    }
  ]

  constructor(public navCtrl: NavController) {
  }


}
