import { ClienteService } from "./../../services/cliente.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {
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
