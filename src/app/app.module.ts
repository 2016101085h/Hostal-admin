import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentPruebaComponent } from './components/content-prueba/content-prueba.component';
import { FeatureRoutingModule } from './app.route';
import { RolesComponent } from './components/roles/roles.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TipoHabitacionComponent } from './components/tipo-habitacion/tipo-habitacion.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { SelectHabitacionComponent } from './components/select-habitacion/select-habitacion.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VenderComponent } from './components/vender/vender.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HabitacionOcupadaComponent } from './components/habitacion-ocupada/habitacion-ocupada.component';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutProcesarComponent } from './components/checkout-procesar/checkout-procesar.component';
import { VentaDiariaComponent } from './components/venta-diaria/venta-diaria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentPruebaComponent,
    RolesComponent,
    ModalComponent,
    TipoHabitacionComponent,
    HabitacionComponent,
    SelectHabitacionComponent,
    RecepcionComponent,
    ClientesComponent,
    ProductosComponent,
    VenderComponent,
    CategoriasComponent,
    HabitacionOcupadaComponent,
    CheckoutComponent,
    CheckoutProcesarComponent,
    VentaDiariaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
