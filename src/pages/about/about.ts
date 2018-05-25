import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage{


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {

  }

    authors: Array<{type: string, names: string}> = [
        {
          type: 'Coordenação do Projeto',
          names: 'Lúcia Yasuko Izumi Nichiata - Departamento de Enfermagem em Saúde Coletiva'
        },
        {
          type: 'Equipe de pesquisadores',
          names:  'Bruna Duarte Canci, Érica Gomes Pereira, Karen Namie Sakata So'
        },
        {
          type: 'Assessoria técnica',
          names: 'Maria Ângela Bianconcini Trindade e João Avancini - Laboratório de Imunodermatologia HCFMUSP, pesquisadora Científica VI'
        },
        {
          type: 'Desenvolvimento',
          names: 'LTIA - Laboratório de Tecnologia da Informação Aplicada - UNESP Bauru (João Vitor Mattos, Carolina Junqueira Ferreira e Daniel Jyoji Nichiata)'
        },
        {
          type: 'Apoio',
          names: 'Unidade de Vigilância em Saúde Lapa-Pinheiros da Secretaria Municipal de Saúdede São Paulo'
        }
    ]

}
