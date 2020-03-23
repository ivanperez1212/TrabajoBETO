import { Component, OnInit } from "@angular/core";
import { ClienteService } from "../../../services/cliente.service";
@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: ["./agregar-cliente.component.css"]
})
export class AgregarClienteComponent implements OnInit {
  nombre = "";
  apellido = "";
  direccion = "";
  distrito = "";
  estado = "";
  ciudad = "";
  constructor(protected clienteService: ClienteService) {}

  ngOnInit() {}

  agregar(Address, City, Country, District, FirstName, LastName) {
    this.clienteService
      .registrar(Address, City, Country, District, FirstName, LastName)
      .subscribe(
        data => {
          alert(`Se Agrego con exito el cliente `);
        },
        error => {
          console.error(error);
        }
      );
  }
}
