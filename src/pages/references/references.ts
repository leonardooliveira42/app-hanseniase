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

  bibs: Array<string> = [
    'Ministério da Saúde (BR), Secretaria de Vigilância em Saúde. Guia de vigilância epidemiológica. Brasília (DF); 2017.',
    'Ministério da Saúde (BR), Secretaria de Vigilância em Saúde. Diretrizes para vigilância, atenção e eliminação da hanseníase como problema de saúde pública. Brasília (DF); 2016.',
    'Ministério da Saúde (BR). Secretaria de Vigilância em Saúde. Guia prático sobre a hanseníase. Brasília (DF); 2017.'
  ]

  ionViewDidLoad() { }
}
