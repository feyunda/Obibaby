import { Component } from '@angular/core';
import { Medicion } from '../modelos/medicion';
import {NavController, NavParams} from '@ionic/angular';
import {MedicionService} from './../services/medicion.service';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {
    public medicion: Medicion;
  constructor(private mediServices: MedicionService) {
    this.medicion = new Medicion(4, 30, true, 20, 39);
  }

  datosS: Medicion;
  setDatos() {
    this.mediServices.obtenerMediciones().subscribe(datosS => this.datosS = datosS);
  }

}



