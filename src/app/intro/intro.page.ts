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
    (<any>this.medicion) = {};
    }

  setDatos() {
    this.mediServices.obtenerMediciones().subscribe(datosS => 
      {
        console.log(datosS);
        datosS = (<any>datosS)[0];
        // this.medicion = datosS;
        this.medicion = new Medicion(datosS.Temp, datosS.Hume, datosS.Mov, datosS.Ruido, datosS.Aire, datosS.HoraFecha, datosS.Alert);

        // this.datosS = datosS;
      });
    // tslint:disable-next-line: max-line-length
  }

  ionViewDidEnter() {
    this.setDatos();
  }

}



