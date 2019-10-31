import { Component } from '@angular/core';
import { Medicion } from '../modelos/medicion';
import {NavController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {

    public medicion: Medicion;
  constructor() {
    this.medicion = new Medicion(4, 30, true, 20, 39);
  }



}



