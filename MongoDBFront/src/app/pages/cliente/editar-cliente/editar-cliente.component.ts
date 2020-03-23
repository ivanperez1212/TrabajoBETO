import { Component, OnInit } from "@angular/core";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.css"]
})
export class EditarClienteComponent implements OnInit {
  clientes: any[] = [];
  constructor(protected clientService: ClienteService) {}
  ngOnInit() {
    this.clientService.mostrar().subscribe(
      data => {
        // Success

        this.clientes = data["cont"];
        console.log(this.clientes);
      },
      error => {
        console.error(error);
      }
    );
  }

  editar(id, Address, City, Country, District, FirstName, LastName) {
    this.clientService
      .editar(id, Address, City, Country, District, FirstName, LastName)
      .subscribe(
        data => {
          alert("siuuu");
        },
        error => {
          console.error(error);
        }
      );
  }
}
