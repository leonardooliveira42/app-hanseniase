import { Injectable } from '@angular/core';

/*
  Generated class for the HansTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HansTypeProvider {
  hansType: any  = [
    {
      id: 'indeterminada',
      title: 'HANSENÍASE INDETERMINADA',
      description: ['Forma inicial, evolui espontaneamente para cura na maioria dos casos ou evolui para as formas polarizadas em cerca de 25% dos casos, o que pode ocorrer no prazo de 3 a 5 anos. Geralmente, encontra-se apenas uma lesão, de cor mais clara que a pele normal, com distúrbio da sensibilidade, ou áreas circunscritas de pele com aspecto normal e com distúrbio de sensibilidade, podendo ser acompanhadas de alopecia e/ou anidrose.'],
      imgs: ['./assets/imgs/x.png','./assets/imgs/x.png']
    },
    {
      id: 'vircho',
      title: 'HANSENÍASE VIRCHOWIANA OU LEPROMATOSA',
      description: [
        `Nesse caso, a imunidade celular é nula e o
        bacilo se multiplica com mais facilidade, levando
        a uma maior gravidade, com anestesia dos pés e
        mãos. Esse quadro oferece os traumatismos e
        feridas, que por sua vez podem causar deformidades,
        atrofia muscular inchaço das pernas e
        surgimento de lesões elevadas na pele (nódulos).`,
        `As lesões cutâneas caracterizam-se por
        placas infiltradas e nódulos (hansenomas), de
        coloração eritêmato-acastanhada ou ferruginosa,
        que podem se instalar também na mucosa
        oral. Podem ocorrer infiltração facial com madorese
        espessamento e acentualção dos sulcos
        cutâneos. Pode, ainda, ocorrer acometimento da
        laringe, com quadro de rouquidão, e de órgãos
        internos (fígado, baço, suprarrenais e testículos),
        bem como a hanseníase histoide, com predominância
        de hansenomas com aspecto de queloides
        ou fibromas, com grande número de troncos
        nervosos de forma simétrica.`
      ],
      imgs: ['./assets/imgs/x.png','./assets/imgs/x.png']
    },
    {
      id: 'tuberculoide',
      title: 'HANSENÍASE TUBERCULÓIDE',
      description: [
        `Forma mais benigna e localizada que aparece
        em pessoas com alta resistência ao bacilo. As
        lesões são poucas (ou única), de limites bem definidos
        e pouco elevados, e com ausência de
        sensibilidade (dormência). Ocorre comprometimento
        simétrico de troncos nervosos, podendo
        causar dor, fraqueza e atrofia muscular. Próximos
        às lesões em placa, podem ser encontrados
        filetes nervosos espessados.`,
        `Nas lesões e/ou trajetos de nervos, pode
        haver perda total da sensibilidade térmica, tátil e
        dolorosa, ausência de sudorese e/ou alopecia.
        Pode ocorrer a forma nodular infantil, que acomete
        crianças de 1 a 4 anos, quando há um foco
        multibacilar no domicílio. A clínica é caracterizada
        por lesões papulosas ou nodulares únicas ou
        em pequeno número, principalmente na face.`
      ],
      imgs: ['./assets/imgs/x.png','./assets/imgs/x.png']
    },
    {
      id: 'dimorfa',
      title: 'HANSENÍASE DIMORFA OU BORDERLINE',
      description: [
        `Forma intermediária, resultante de uma imunidade também intermediária, com características clínicas e laboratoriais que podem se aproximar do polo tuberculoide ou virchowiano. A variedade de lesões cutâneas é maior e estas apresentam-se como placas, nódulos eritêmato-acastanhados, em grande número, com tendência à simetria. As lesões mais características dessa forma clínica são denominadas lesões pré-faveolares ou faveolares, sobre-elevadas ou não, com áreas centrais deprimidas e aspecto de pele normal, com limites internos nítidos e externos difusos. O acometimento dos nervos é mais extenso, podendo ocorrer neurites agudas de grave prognóstico.`
      ],
      imgs: ['./assets/imgs/x.png','./assets/imgs/x.png']
    }
  ];

  renderObj: any = {};

  constructor() {}

  //Select the correct object to render on the display
  setRenderObj(path){
    this.renderObj = this.hansType.filter( el => el.id == path )[0];
  }

  //Return the current renderObj to render on the display
  getRenderObj(){
    return this.renderObj;
  }

}
