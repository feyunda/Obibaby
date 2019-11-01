

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicion } from '../modelos/medicion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  constructor(private httpClient: HttpClient) { }

  private readonly getMedicionesUrl = 'http://10.49.180.80/datosSensor/getDatos.php';

  obtenerMediciones(): Observable<Medicion> {
    return this.httpClient.get<Medicion>(this.getMedicionesUrl).pipe(
      map(rawMedicion => {
        return rawMedicion as Medicion;
      })
    );
  }
}



