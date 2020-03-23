import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./pages/index/index.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ClienteComponent } from "./pages/cliente/cliente.component";
import { PropiedadComponent } from "./pages/propiedad/propiedad.component";
import { RentaComponent } from "./pages/renta/renta.component";
import { AgregarClienteComponent } from "./pages/cliente/agregar-cliente/agregar-cliente.component";
import { DesactivarClienteComponent } from './pages/cliente/desactivar-cliente/desactivar-cliente.component';
import { EditarClienteComponent } from './pages/cliente/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './pages/cliente/buscar-cliente/buscar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavBarComponent,
    ClienteComponent,
    PropiedadComponent,
    RentaComponent,
    AgregarClienteComponent,
    DesactivarClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
