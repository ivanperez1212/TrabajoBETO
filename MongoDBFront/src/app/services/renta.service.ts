import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RentaService {
  url = "http://localhost:3000/api/";
  constructor(private http: HttpClient) {}

  registrar(Customer, Property, Dat) {
    return this.http.post(`${this.url}/rental/rental`, {
      Customer: Customer,
      Property: Property,
      Date: Dat
    });
  }

  mostrar() {
    return this.http.get(`${this.url}/rental/search`);
  }
}
