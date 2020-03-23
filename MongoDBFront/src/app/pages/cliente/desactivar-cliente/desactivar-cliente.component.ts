import { Component, OnInit } from "@angular/core";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-desactivar-cliente",
  templateUrl: "./desactivar-cliente.component.html",
  styleUrls: ["./desactivar-cliente.component.css"]
})
export class DesactivarClienteComponent implements OnInit {
  constructor(protected clientService: ClienteService) {}

  ngOnInit() {}
  eliminar(params) {
    this.clientService.eliminar(params).subscribe(
      data => {
        alert("Se elimino ");
      },
      error => {
        console.error(error);
      }
    );
  }
}
