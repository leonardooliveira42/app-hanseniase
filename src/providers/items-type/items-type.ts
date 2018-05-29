import { Injectable } from '@angular/core';

/*
  Generated class for the ItemsTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsTypeProvider {

  //objects to render on the ItemsTypePage
  items: any = [
     {
      id: 'sinais',
      title: 'Sinais e Sintomas',
      nodes: [
        {
          id: 'lesao',
          description: 'Lesão',
          clickable: true
        },
        {
          id: 'nervo',
          description: 'Comprometimento nervo periférico',
          clickable: true
        },
      ]
    },
    {
     id: 'fazer',
     title: 'O que fazer na suspeita',
     nodes: [
       {
         id: 'exame',
         description: 'Exame dermatoneurológico',
         clickable: true
       },
       {
         id: '',
         description: 'Encaminhar o caso suspeito a um serviço de saúde de referência para confirmação diagnóstica',
         clickable: false
       },
     ]
   }
  ];

  renderObj: any = {};

  constructor() { }

  //Select the correct object to render on the display
  setRenderObj(path){
    this.renderObj = this.items.filter( el => el.id == path )[0];
  }

  //Return the current renderObj to render on the display
  getRenderObj(){
    return this.renderObj;
  }


}
