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
      title: 'O que é',
      subtitle: '',
      icon: './assets/icon/o-que-e.png',
      description: [
        `A hanseníase é uma doença crônica, infectocontagiosa,
        e é capaz de infectar grande número
        de indivíduos , embora poucos adoeçam.
        Em 2017, o Brasil ocupou a segunda posição em
        casos de hanseníase com 28.761.`,
        `O diagnóstico é realizado por meio de uma
        análise da história e condições de vida da pessoa e
        um exame dermatoneurológico, para identificar
        lesões e alterações dos nervos periféricos.`,
        `A principal via de eliminação do bacilo e a mais
        provável via de entrada do organismo são as vias
        aéreas superiores (mucosa nasal e orofaringe).`
      ]
    },
    {
      id: 'fazer',
      title: 'O que fazer',
      subtitle: '',
      icon: './assets/icon/o-que-fazer.png',
      description: [
        `O diagnóstico de hanseníase deve ser recebido
        de modo semelhante ao de outras doenças curá-
        veis.`,
        `Se vier a causar impacto psicológico, tanto em
        quem adoeceu quanto nos familiares ou em pessoas
        de sua rede social, essa situação requererá
        uma abordagem apropriada pela equipe de
        saúde, que favoreça a aceitação do problema, superação
        das dificuldades e maior adesão ao tratamento.`,
        `Essa atenção deve ser oferecida no momento
        do diagnóstico, bem como no decorrer do tratamento
        da doença e, se necessário, após a alta.`,
        `Outro ponto importante é que o profissional
        realize busca ativa de contatos para que haja intervenção
        na cadeia de transmissão da doença. A
        hanseníase é uma doença de notificação compulsória
        em todo território nacional e investigação
        obrigatória.`
      ]
    },
    {
      id: 'profissional',
      title: 'Profissional',
      subtitle: 'SE VOCÊ NÃO É UM PROFISSIONAL DE SAÚDE O QUE FAZER',
      icon: './assets/icon/ambulancia.png',
      description: [
        `Caso você resida no município de São Paulo,
        acesse o link do site Busca Saúde
        (http://buscasaude.prefeitura.sp.gov.br/) para que
        você possa encontrar a Unidade Básica de Saúde
        mais próxima.`,
        `Caso você não resida no município de São
        Paulo, pesquise no site da Secretaria de Saúde do
        seu município para encontrar a Unidade Básica
        de Saúde mais próxima de você.`
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
