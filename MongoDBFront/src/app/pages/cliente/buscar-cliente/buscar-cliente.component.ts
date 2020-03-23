import { Component, OnInit } from "@angular/core";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-buscar-cliente",
  templateUrl: "./buscar-cliente.component.html",
  styleUrls: ["./buscar-cliente.component.css"]
})
export class BuscarClienteComponent implements OnInit {
  clientes: any[] = [];
  constructor(protected clientService: ClienteService) {}

  ngOnInit() {
    this.clientService.mostrar().subscribe(
      data => {
        // Success

        this.clientes = data["cont"];
        // console.log(this.clientes);
      },
      error => {
        console.error(error);
      }
    );
  }
  buscar(params) {
    this.clientService.buscar(params).subscribe(
      data => {
        // Success

        this.clientes = data["cont"];
        // console.log(this.clientes);
      },
      error => {
        console.error(error);
      }
    );
  }
  desactivar(id) {
    this.clientService.desactivar(id).subscribe(
      data => {
        alert("Se elimino(Desactivo) correctamente");
        location.reload();
      },
      error => {
        console.error(error);
      }
    );
  }
}
