import { RentaService } from "./../../services/renta.service";
import { ClienteService } from "src/app/services/cliente.service";
import { Component, OnInit } from "@angular/core";
import { PropiedadService } from "src/app/services/propiedad.service";

@Component({
  selector: "app-renta",
  templateUrl: "./renta.component.html",
  styleUrls: ["./renta.component.css"]
})
export class RentaComponent implements OnInit {
  propiedades: any[] = [];
  clientes: any[] = [];
  rentas: any[] = [];

  constructor(
    protected propiedadService: PropiedadService,
    protected clientService: ClienteService,
    protected rentaService: RentaService
  ) {}

  ngOnInit() {
    this.propiedadService.type("House").subscribe(
      data => {
        // Success

        this.propiedades = data["cont"];
        console.log(this.propiedades);
      },
      error => {
        console.error(error);
      }
    );
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
    this.rentaService.mostrar().subscribe(
      data => {
        // Success

        this.rentas = data["cont"];
        //console.log(this.rentas);
      },
      error => {
        console.error(error);
      }
    );
  }

  rentar(cliente, propiedad, fecha) {
    this.rentaService.registrar(cliente, propiedad, fecha).subscribe(
      date => {
        alert("Se agrego exitosamente");
      },
      error => {
        console.error(error);
      }
    );
  }
}
