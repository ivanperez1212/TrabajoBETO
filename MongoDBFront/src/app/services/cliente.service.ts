import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ClienteService {
  url = "http://localhost:3000/api/";
  constructor(private http: HttpClient) {}

  registrar(Address, City, Country, District, FirstName, LastName) {
    return this.http.post(`${this.url}customer/registration`, {
      Address: Address,
      City: City,
      Country: Country,
      District: District,
      FirstName: FirstName,
      LastName: LastName
    });
  }
  backup() {
    return this.http.get(`${this.url}backup`);
  }
  desactivar(id) {
    return this.http.delete(`${this.url}customer/eliminar/${id}`);
  }
  mostrar() {
    return this.http.get(`${this.url}customer/search`);
  }
  buscar(params) {
    return this.http.get(`${this.url}customer/search/${params}`);
  }

  editar(id, Address, City, Country, District, FirstName, LastName) {
    return this.http.put(`${this.url}customer/actualizar/${id}`, {
      Address: Address,
      City: City,
      Country: Country,
      District: District,
      FirstName: FirstName,
      LastName: LastName
    });
  }
  eliminar(params) {
    return this.http.delete(`${this.url}customer/eliminar/many/${params}`);
  }
}
