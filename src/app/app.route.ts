import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContentPruebaComponent } from './components/content-prueba/content-prueba.component';
import { RolesComponent } from './components/roles/roles.component';
import { TipoHabitacionComponent } from './components/tipo-habitacion/tipo-habitacion.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { SelectHabitacionComponent } from './components/select-habitacion/select-habitacion.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VenderComponent } from './components/vender/vender.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HabitacionOcupadaComponent } from './components/habitacion-ocupada/habitacion-ocupada.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutProcesarComponent } from './components/checkout-procesar/checkout-procesar.component';
import { VentaDiariaComponent } from './components/venta-diaria/venta-diaria.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'inicio', component: ContentPruebaComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'tipoHabitacion', component: TipoHabitacionComponent },
  { path: 'habitacion', component: HabitacionComponent },
  { path: 'seleccionar-habitacion', component: SelectHabitacionComponent },
  { path: 'seleccionar-habitacion/:id', component: RecepcionComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'habitaciones-ocupadas', component: HabitacionOcupadaComponent },
  { path: 'habitaciones-ocupadas-vender/:id', component: VenderComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout-procesar/:habitacion_id', component: CheckoutProcesarComponent },
  { path: 'venta-diaria', component: VentaDiariaComponent },
  {path: '**', redirectTo: 'inicio'}
  // { path: 'path3', component: Name3Component },
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  // { path: '**', component: ContentPruebaComponent, redirectTo: 'inicio' },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
