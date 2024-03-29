import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepcionService } from 'src/app/services/recepcion.service';
import { ProductosService } from 'src/app/services/productos.service';
import { VentasService } from '../../services/ventas.service';
@Component({
  selector: 'app-venta-diaria',
  templateUrl: './venta-diaria.component.html',
  styleUrls: ['./venta-diaria.component.css']
})
export class VentaDiariaComponent implements OnInit {



  temp = [];
  // diaActual = new Date();
  ventas = [];
  rows = [];
  datosVenta: any;
  arrayDetalle = [];
  loading = true;
  fecha = new Date();
  mostrar = 0;
  constructor(private route: Router,
              private venta: VentasService,
              private producto: ProductosService,
              private toast: ToastrService) {
                // console.log(this.formatearFecha(this.fecha));
              }

              ngOnInit(): void {
                this.fecha =  this.formatearFecha(this.fecha)
                console.log(this.fecha);
                this.getVentas(this.fecha);
  }
  // tslint:disable-next-line: typedef
  getVentas(fecha = this.fecha) {
    this.venta.obtenerVentas(fecha).subscribe((resp: any) => {
      console.log(resp);
      this.ventas = resp.venta;
      this.temp = [...this.ventas];
      // this.rows = [...this.productos];
      this.loading = false;
    });
  }
  // tslint:disable-next-line: typedef
  formatearFecha(fecha){
    // tslint:disable-next-line: variable-name
    const fecha_nacimiento = new Date(fecha);
    const ano = fecha_nacimiento.getFullYear();
    const mes = fecha_nacimiento.getMonth() + 1;
    const dia = fecha_nacimiento.getDate();
    // tslint:disable-next-line: variable-name
    let fecha_formateado: any;
    // tslint:disable-next-line: variable-name
    if ( mes < 10 && dia < 10){

      fecha_formateado = `${ano}-0${mes}-0${dia}`;
    }else if (mes < 10 && dia >= 10) {

      fecha_formateado = `${ano}-0${mes}-${dia}`;
    }else if (dia < 10 && mes >= 10 ) {
      fecha_formateado = `${ano}-${mes}-0${dia}`;
    }else{
      fecha_formateado = `${ano}-${mes}-${dia}`;

    }
    return fecha_formateado;
  }
  // tslint:disable-next-line: typedef
  updateFilter(event) {

    const fecha = this.formatearFecha(event);
    console.log(fecha);
    // filter our data
    // tslint:disable-next-line: typedef
    const temp = this.temp.filter((d) => {
      return d.fecha_hora.toLowerCase().indexOf(fecha) !== -1 || !fecha;
    });
    this.ventas = temp;
    this.getVentas(fecha);

}
// tslint:disable-next-line: typedef
openModal(modal, data: any){
  // console.log(data);
  modal.show();

  this.venta.obtenerDetalleVenta(data).subscribe((resp: any) => {
    console.log(resp);
    this.datosVenta = resp.venta[0];
    this.arrayDetalle = resp.detalle;
  });
  // this.getProductos();
}

// tslint:disable-next-line: typedef
anularVenta(venta) {
  Swal.fire({
    title: 'Estas seguro de Desactivar este registro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      this.venta.anularVenta(venta).subscribe((resp) => {
        // console.log(resp);

        // tslint:disable-next-line: variable-name
        // const fecha_venta = venta.fecha_hora.split(' ');
        // console.log(fecha_venta);
        // this.fecha = new Date(fecha_venta);
        // console.log(this.fecha);
        // this.rols.splice(indice, 1);
        this.venta.obtenerVentas(this.fecha).subscribe((respuesta: any) => {
         this.ventas = [...respuesta.venta];
       });

       });
      Swal.fire(
        'Anulado!',
        'El registro ha sido anulado.',
        'success'
      );
    }
  });

}
listarPdf(venta) {
  window.open(`http://127.0.0.1:8000/api/venta/imprimirpdf/${venta.recepcion_id}-${venta.id}`);
}
ventasPDF(buscar){
  window.open(`http://127.0.0.1:8000/api/venta/ventaspdf/${buscar}`);
}

}
