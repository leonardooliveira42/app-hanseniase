import { Injectable } from '@angular/core';

/*
  Generated class for the GenericProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenericProvider {
  pages: any = [
    {
      id: 'eh',
      title: 'O que é a hanseníase',
      descriptions: [
        `É uma doença causada pela Mycobacterium leprae que infecta nervos periféricos`,
        `Primeiros sinais e sintomas são áreas da pele com alteração de
        sensibilidade com ou sem comprometimento de nervos periféricos em lesão
        única ou em múltiplas lesões`,
        `Regiões da pele com alopecia e/ou anidrose`,
        `Notificação compulsória na confirmação do diagnóstico`,
        `Investigação epidemiológica obrigatória para o caso confirmado e seus contatos intradomiciliares`
      ],
      imgs: []
    },
    {
      id: 'lesao',
      title: 'Lesões',
      descriptions: [],
      imgs: [
        {
          src: './assets/imgs/img1.png',
          label: 'Lesão indeterminada paucibacilar (manchas hipocrômicas com ou sem diminuição da sudorese e rarefação de pelos)'
        },
        {
          src: './assets/imgs/img2.png',
          label: 'Lesão tuberculóide paucibacilar (placa eritematosa, hipocrômica e bem delimitada)'
        },
        {
          src: './assets/imgs/img3.png',
          label: 'Lesões dimorfas multibacilares (pré-faveolares eritematosas planas com o centro claro e faveolares de tonalidade ferruginosa ou pardacenta)'
        },
        {
          src: './assets/imgs/img4.png',
          label: 'Lesão virchowiana multibacilar (placa eritematosa de pele infiltrada e de bordas mal definidas com nódulos)'
        }
      ]
    },
    {
      id: 'nervo',
      title: 'Comprometimento de nervos',
      descriptions: [],
      imgs: [
        {
          src: './assets/imgs/img5.png',
          label: 'Nervo auricular espessado'
        },
        {
          src: './assets/imgs/img6.png',
          label: 'Nervo ulnar espessado'
        }
      ]
    }
  ];

  renderObj: any = {};

  constructor() {}

  //Select the correct object to render on the display
  setRenderObj(path){
    this.renderObj = this.pages.filter( el => el.id == path )[0];
  }

  //Return the current renderObj to render on the display
  getRenderObj(){
    return this.renderObj;
  }

}
