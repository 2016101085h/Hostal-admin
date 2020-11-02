import { Component, OnInit } from '@angular/core';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-checkout-procesar',
  templateUrl: './checkout-procesar.component.html',
  styleUrls: ['./checkout-procesar.component.css']
})
export class CheckoutProcesarComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  habitacion_id: number;
  costoHabitacion: any;
  arrayDataRecepcion: any;
  arrayDataDetalle: any;
  montoTotal: any;
  mostrar = false;
  constructor(private recepcion: RecepcionService,
              private route: ActivatedRoute,
              private router: Router,
              private venta: VentasService) {
    this.route.params.subscribe((params) => {
      console.log(params);
      // tslint:disable-next-line: radix
      this.habitacion_id = parseInt(params.habitacion_id);

    });
    this.recepcion.obtenerRecepcionCheckout(this.habitacion_id).subscribe((resp: any) => {
      console.log(resp);
      const numero = resp.recepcion.length;
      this.arrayDataRecepcion = resp.recepcion[numero - 1];
      this.arrayDataDetalle = resp.detalle;
      if (this.arrayDataDetalle.length === 0){
        this.mostrar = true;
      }
      this.montoTotal = this.arrayDataRecepcion.monto;
      // this.costoHabitacion = this.arrayDataRecepcion[0].precio;
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  volver(){
    this.router.navigate(['/checkout']);
  }
  // tslint:disable-next-line: typedef
  terminarVenta(comprobante: string){
      const datoEnviar = {
        recepcion_id: this.arrayDataRecepcion.id,
        // recepcion_id: this.arrayData.recepcion[0].id,
        monto_total: parseFloat(this.montoTotal),
        medio_pago: this.arrayDataRecepcion.medio_pago,
        comprobante,
        habitacion_id: this.habitacion_id
      };
      console.log(datoEnviar);

      this.venta.registrarVenta(datoEnviar).subscribe((resp: any) => {
        console.log(resp);
      });

  }

}
