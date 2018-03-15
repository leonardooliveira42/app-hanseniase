import { Injectable } from '@angular/core';

/*
  Generated class for the SymptomsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SymptomsProvider {

  //objects to render on the SymptomsPage
  symptoms: any = [
     {
      id: 'neural',
      title: 'Sinais e Sintomas',
      subtitle: 'COMPROMENTIMENTO NEURAL',
      nodes: [
        {
          description: 'Comprometimento simétrico de troncos nervosos, podendo causar dor, fraqueza e atrofia muscular.',
          hansType: 'tuberculoide'
        },
        {
          description: 'Filetes nervosos espassados próximos às lesões em placa. Nas lesões e/ou trajetos de nervos, pode haver perda total da sensibilidade térmica, tátil e dolorosa ausência de sudorese e/ou alopecia.',
          hansType: 'tuberculoide'
        },
        {
          description: 'Acometimento extenso dos nervos.',
          hansType: 'dimorfa'
        },
        {
          description: 'Neurites agudas.',
          hansType: 'dimorfa'
        },
        {
          description: 'Comprometimento de maior número de troncos nervosos de forma simétrica.',
          hansType: 'vircho'
        },
        {
          description: 'Anestesia dos pés e mãos.',
          hansType: 'vircho'
        },
        {
          description: 'Traumatismos e feridas que podem causar: deformidades, atrofia muscular, inchaço das pernas e surgimento de lesões elevadas na pele (nódulos).',
          hansType: 'vircho'
        }
      ],
      icon: './assets/icon/sinais.png'
     },
    {
     id: 'manchas',
     title: 'Sinais e Sintomas',
     subtitle: 'MANCHAS',
     nodes: [
       {
         description: 'Apenas uma lesão, de cor mais clara que a pele normal, com distúrbio da sensibilidade, ou áreas circunscritas de pele com aspecto normal e com distúrbio de sensibilidade, podendo ser acompanhadas de alopecia e/ou anidrose',
         hansType: 'indeterminada'
       },
       {
         description: 'Única ou poucas lesões, de limites bem definidos e pouco elevados, e com ausência de sensibilidade (dormência). Próximos às lesões em placa, podem ser encontrados filetes nervosos espessados. Nas lesões e/ou trajetos de nervos, pode haver perda total da sensibilidade térmica, tátil e dolorosa, ausência de sudorese e/ou alopecia.',
         hansType: 'tuberculoide'
       },
       {
         description: 'Várias lesões cutâneas do tipo placas, nódulos eritêmato-acastanhados, em grande número, com tendência à simetria.',
         hansType: 'dimorfa'
       },
       {
         description: ' Lesões pré-faveolares ou faveolares, sobre-elevadas ou não (áreas centrais deprimidas e aspecto de pele normal, com limites internos nítidos e externos difusos).',
         hansType: 'dimorfa'
       },
       {
         description: 'Placas infiltradas e nódulos (hansenomas), de coloração eritêmato-acastanhada ou ferruginosa, que podem se instalar também na mucosa oral.',
         hansType: 'vircho'
       },
       {
         description: 'Hanseomas com aspecto de queloides ou fibromas.',
         hansType: 'vircho'
       }
     ],
     icon: './assets/icon/sinais-manchas.png'
    },
   {
    id: 'outros',
    title: 'Sinais e Sintomas',
    subtitle: 'OUTROS',
    nodes: [
      {
        description: 'Infiltração facial com madarose superciliar e ciliar, hansenomas nos pavilhões auriculares, espessamento e acentuação dos sulcos cutâneos.',
        hansType: 'vircho'
      },
      {
        description: 'Acometimento da laringe com quadro de rouquidão.',
        hansType: 'vircho'
      },
      {
        description: 'Acometimento de órgãos internos (fígado, baço, suprarrenais e testículos).',
        hansType: 'vircho'
      }
    ],
    icon: './assets/icon/outros.png'
   }
  ];

  renderObj: any = {};

  constructor() { }

  //Select the correct object to render on the display
  setRenderObj(path){
    this.renderObj = this.symptoms.filter( el => el.id == path )[0];
  }

  //Return the current renderObj to render on the display
  getRenderObj(){
    return this.renderObj;
  }


}
