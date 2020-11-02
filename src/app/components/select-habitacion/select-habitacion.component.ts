import { Component, OnInit, OnChanges} from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-select-habitacion',
  templateUrl: './select-habitacion.component.html',
  styleUrls: ['./select-habitacion.component.css']
})
export class SelectHabitacionComponent implements OnInit, OnChanges {

  habitacion: Array<any> = [];
  piso = 'primero';
  constructor(private hs: HabitacionService,
              private router: Router) { }
  ngOnInit(): void {
    this.getHabitacion(this.piso);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(): void {
    console.log(this.piso);
  }
  // tslint:disable-next-line: typedef
  getHabitacion(tipo){
    this.hs.selectHabitacion(tipo).subscribe((resp: any) => {
      // console.log(resp);
      // console.log(this.piso);
      this.habitacion = resp.habitacion;
    });
  }
  // tslint:disable-next-line: typedef
  mandarHabitacion(item) {
    if (item.estado === 'ocupado') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'La habitacion esta ocupado',
        showConfirmButton: false,
        timer: 1500
      });
    }else if (item.estado === 'sucio'){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'La habitacion esta en limpieza',
        showConfirmButton: false,
        timer: 1500
      });

    }else {
      this.router.navigate(['/seleccionar-habitacion', item.id]);

    }
  }

}
