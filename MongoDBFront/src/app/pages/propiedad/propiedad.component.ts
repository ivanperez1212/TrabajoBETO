import { PropiedadService } from "./../../services/propiedad.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-propiedad",
  templateUrl: "./propiedad.component.html",
  styleUrls: ["./propiedad.component.css"]
})
export class PropiedadComponent implements OnInit {
  propiedades: any[] = [];

  constructor(protected propiedadService: PropiedadService) {}

  ngOnInit() {
    this.propiedadService.type("House").subscribe(
      data => {
        // Success

        this.propiedades = data["cont"];
      },
      error => {
        console.error(error);
      }
    );
  }

  tipo(params) {
    this.propiedadService.type(params).subscribe(
      data => {
        // Success

        this.propiedades = data["cont"];
      },
      error => {
        console.error(error);
      }
    );
  }
  rango(min, max) {
    this.propiedadService.range(min, max).subscribe(
      data => {
        alert("listo");
        this.propiedades = data["cont"];
      },
      error => {
        console.error(error);
      }
    );
  }
}
