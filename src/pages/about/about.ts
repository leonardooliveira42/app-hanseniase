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
          names: 'Lúcia Yasuko Izumi Nichiata – Departamento de Enfermagem em Saúde Coletiva da EEUSP'
        },
        {
          type: 'Equipe de pesquisadores',
          names:  'Bruna Duarte Canci, Érica Gomes Pereira e Karen Namie Sakata-So – Departamento de Enfermagem em Saúde Coletiva da EEUSP'
        },
        {
          type: 'Assessoria técnica',
          names: 'Maria Ângela Bianconcini Trindade e João de Magalhães Avancini Ferreira Alves – Divisão de Clínica Dermatológica do HCFMUSP'
        },
        {
          type: 'Desenvolvimento',
          names: 'João Vitor Mattos, Carolina Junqueira Ferreira e Daniel Jyoji Nichiata - Laboratório de Tecnologia da Informação Aplicada/LTIA da UNESP'
        }
    ]

}
