import { Component } from '@angular/core';
import { Medicion } from '../modelos/medicion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public medicion: Medicion;
  constructor() {
    this.medicion = new Medicion(4, 30, true, 20);
  }



}
