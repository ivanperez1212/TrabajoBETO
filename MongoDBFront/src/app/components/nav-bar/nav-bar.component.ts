import { Component, OnInit } from '@angular/core';
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {}

  backup() {
    alert(
      "Su Base de datos se esta respaldando en la carpeta de la api Server/dump/"
    );
    this.clienteService.backup().subscribe(
      data => {
        alert(
          "Su Base de datos se respaldo correctamente en la carpeta de la api Server/dump/"
        );
      },
      error => {
        console.error(error);
      }
    );
  }

}
