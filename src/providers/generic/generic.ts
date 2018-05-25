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
      title: 'O que é a doença hanseníase',
      descriptions: [
        `Causada pela Mycobacterium leprae que infecta
        nervos periféricos`,
        `Primeiros sinais e sintomas são lesão ou mancha de
        pele com ou sem espessamento do nervo com
        perda de sensibilidade`,
        `Regiões com queda de pelo, pele seca e que ardem,
        cocem ou piniquem`,
        `Notificação compulsória na confirmação do diagnóstico`,
        `Investigação epidemiológica obrigatória para o caso
        confirmado e seus contatos`
      ],
      imgs: []
    },
    {
      id: 'lesao',
      title: 'Lesão',
      descriptions: [],
      imgs: ['./assets/imgs/img1.png','./assets/imgs/img2.png','./assets/imgs/img3.png','./assets/imgs/img4.png','./assets/imgs/img5.png']
    },
    {
      id: 'nervo',
      title: 'Comprometimento do nervo periférico',
      descriptions: [],
      imgs: ['./assets/imgs/img6.png','./assets/imgs/img7.png']
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
