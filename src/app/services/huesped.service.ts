import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HuespedService {
  public url = 'http://127.0.0.1:8000/api/huesped';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getHuesped(){
    const ruta = `${this.url}`;
    return this.http.get(ruta).pipe(map((resp: any) => resp) );
  }
  // tslint:disable-next-line: typedef
  guardarHuesped(huesped){
    const ruta = `${this.url}/guardar`;
    return this.http.post(ruta, huesped);
  }
  // tslint:disable-next-line: typedef
  actualizarHuesped(huesped){
    const ruta = `${this.url}/actualizar`;
    return this.http.put(ruta, huesped);
  }
  // tslint:disable-next-line: typedef
  eliminarHuesped(huesped){
    const ruta = `${this.url}/eliminar`;
    return this.http.put(ruta, huesped);
  }
}
