import { RentaComponent } from "./pages/renta/renta.component";
import { PropiedadComponent } from "./pages/propiedad/propiedad.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { AgregarClienteComponent } from "./pages/cliente/agregar-cliente/agregar-cliente.component";
import { DesactivarClienteComponent } from "./pages/cliente/desactivar-cliente/desactivar-cliente.component";
import { ClienteComponent } from "./pages/cliente/cliente.component";
import { EditarClienteComponent } from "./pages/cliente/editar-cliente/editar-cliente.component";
import { BuscarClienteComponent } from "./pages/cliente/buscar-cliente/buscar-cliente.component";
const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "home", component: IndexComponent },
  { path: "cliente", component: ClienteComponent },
  { path: "cliente/agregar", component: AgregarClienteComponent },
  { path: "cliente/editar", component: EditarClienteComponent },
  { path: "cliente/desactivar", component: DesactivarClienteComponent },
  { path: "cliente/buscar", component: BuscarClienteComponent },
  { path: "propiedad", component: PropiedadComponent },
  { path: "renta", component: RentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
