import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PropiedadService {
  url = "http://localhost:3000/api/property/";
  constructor(private http: HttpClient) {}

  type(params) {
    return this.http.get(`${this.url}search/type/${params}`);
  }
  range(min, max) {
    return this.http.get(`${this.url}search/range/${min}/${max}`);
  }
}
