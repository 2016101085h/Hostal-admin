import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  public url = 'http://127.0.0.1:8000/api/rol';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRoles(){
    const ruta = `${this.url}`;
    return this.http.get(ruta).pipe(map((resp: any) => resp) );
  }
  // tslint:disable-next-line: typedef
  guardarRol(rol){
    const ruta = `${this.url}/guardar`;
    return this.http.post(ruta, rol);
  }
  // tslint:disable-next-line: typedef
  actualizar(rol){
    const ruta = `${this.url}/actualizar`;
    return this.http.put(ruta, rol);
  }
  // tslint:disable-next-line: typedef
  desactivar(rol){
    const ruta = `${this.url}/desactivar`;
    return this.http.put(ruta, rol);
  }
  // tslint:disable-next-line: typedef
  activar(rol){
    const ruta = `${this.url}/activar`;
    return this.http.put(ruta, rol);
  }
}
