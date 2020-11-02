import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService {


  public url = 'http://127.0.0.1:8000/api/tipo';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getTipoHabitacion(){
    const ruta = `${this.url}`;
    return this.http.get(ruta).pipe(map((resp: any) => resp) );
  }
  // tslint:disable-next-line: typedef
  selectTipoHabitacion(){
    const ruta = `${this.url}/gettipo`;
    return this.http.get(ruta);
  }
  // tslint:disable-next-line: typedef
  guardarTipoHabitacion(tipoHabitacion){
    const ruta = `${this.url}/guardar`;
    return this.http.post(ruta, tipoHabitacion);
  }
  // tslint:disable-next-line: typedef
  actualizarTipoHabitacion(tipoHabitacion){
    const ruta = `${this.url}/actualizar`;
    return this.http.put(ruta, tipoHabitacion);
  }
  // tslint:disable-next-line: typedef
  eliminarTipoHabitacion(tipoHabitacion){
    const ruta = `${this.url}/eliminar`;
    return this.http.put(ruta, tipoHabitacion);
  }
}
