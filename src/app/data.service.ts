import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://192.168.1.70:5000';

  //  private apiUrl = ' http://192.168.50.158:5000';
  //private apiUrl = 'http://192.168.50.226:5000/';
  constructor(private http: HttpClient) { }

  // Métodos para interactuar con la API
  obtenerClientes(): Observable<any> {
    console.log(`${this.apiUrl}Sistema_B/clientes`);
    return this.http.post(`${this.apiUrl}/Sistema_B/clientes`, null);
  }

  obtenerCliente(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Sistema_B/obtener_cliente/${id}`);
  }

  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Sistema_B/agregar_cliente`, cliente);
  }

  actualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Sistema_B/actualizar_cliente/${id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Sistema_B/eliminar_cliente/${id}`);
  }
}
