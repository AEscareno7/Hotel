import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  clientes: any[] = [];
  nuevoCliente: any = {};
  clienteAEditar: any = {};
  camposEditable: string[] = ['direccion', 'telefono', 'observaciones', 'pais'];  // Lista de campos activados para edición
  clienteEDIT: any = null;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }
  iniciarEdicion(cliente: any): void {
    this.clienteAEditar = { ...cliente };  // Copia del cliente para editar
    // Agrega más campos a la lista camposEditable según tus necesidades
    this.camposEditable = ['direccion', 'telefono', 'observaciones', 'pais'];
  }

  editarCampo(campo: string): boolean {
    return this.camposEditable.includes(campo);
  }
  obtenerClientes(): void {
    this.dataService.obtenerClientes().subscribe(
      (data) => {
        this.clientes = data.clientes;
      },
      (error) => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  agregarCliente(): void {
    this.dataService.agregarCliente(this.nuevoCliente).subscribe(
      (data) => {
        // Actualizar la lista de clientes después de agregar uno nuevo
        this.obtenerClientes();
        // Limpiar el formulario después de agregar
        this.nuevoCliente = {};
      },
      (error) => {
        console.error('Error al agregar cliente', error);
      }
    );
  }

  actualizarCliente(id: any): void {
    console.log('Objeto id:', id);

    this.clienteEDIT = id;

    console.log('Identificación:', id.identificacion);
    this.dataService.actualizarCliente(id.identificacion, id).subscribe(
      (data) => {
        // Actualizar la lista de clientes después de la actualización
        this.obtenerClientes();
        // Limpiar el objeto de edición después de actualizar
        this.clienteAEditar = {};
      },
      (error) => {
        console.error('Error al actualizar cliente', error);
      }
    );
  }

  eliminarCliente(id: any): void {
    this.dataService.eliminarCliente(id.identificacion).subscribe(
      (data) => {
        // Actualizar la lista de clientes después de eliminar uno
        this.obtenerClientes();
      },
      (error) => {
        console.error('Error al eliminar cliente', error);
      }
    );
  }
}