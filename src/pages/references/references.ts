import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-references',
  templateUrl: 'references.html',
})
export class ReferencesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  bibs: Array<{title: string, description: string,link: string}> = [
    {
      title: 'Guia de vigilância epidemiológica',
      description:'(http://portalarquivos.saude.gov.br/images/pdf/2017/outubro/06/Volume-Unico-2017.pdf)',
      link: 'http://portalarquivos.saude.gov.br/images/pdf/2017/outubro/06/Volume-Unico-2017.pdf'
    },
    {
      title: 'Diretrizes para vigilância, atenção e eliminação da hanseníase como problema de saúde pública',
      description:'(http://portal.saude.pe.gov.br/sites/portal.saude.pe.gov.br/files/diretrizes_para_._eliminacao_hanseniase_-_manual_-_3fev16_isbn_nucom_final_2.pdf)',
      link: 'http://portal.saude.pe.gov.br/sites/portal.saude.pe.gov.br/files/diretrizes_para_._eliminacao_hanseniase_-_manual_-_3fev16_isbn_nucom_final_2.pdf'
    },
    {
      title: 'Manual técnico de hanseníase',
      description:'(http://portalarquivos2.saude.gov.br/images/pdf/2017/novembro/22/Guia-Pratico-de-Hanseniase-WEB.pdf)',
      link:'http://portalarquivos2.saude.gov.br/images/pdf/2017/novembro/22/Guia-Pratico-de-Hanseniase-WEB.pdf'
    },
    {
      title: 'Crédito das fotos',
      description: 'Setor de fotografia da dermatologia HCFMUSP - Amadeu Ferreira e Alexandre Vargas',
      link:'http://www.hc.fm.usp.br/',
    }
  ]

  ionViewDidLoad() { }
}
