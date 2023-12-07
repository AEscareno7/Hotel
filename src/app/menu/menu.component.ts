import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() items: { src: string, alt: string, platillo:string, preci: string }[] = [ 
    { src: './assets/images/carta/Habitacion-normal.jpg', alt: 'Descripción de la imagen 1',platillo:'Habitacion Estandar',preci:'810'},
  { src: './assets/images/carta/Habitacion-premium.jpeg', alt: 'Descripción de la imagen 2' ,platillo:    'Habitacion Premium',preci:'2100'},
  { src: './assets/images/carta/Suite_presidencial.png', alt: 'Descripción de la imagen 3' ,platillo:  'Suite',preci:'3200'},
  { src: './assets/images/carta/gimnasio.jpg', alt: 'Descripción de la imagen 4' ,platillo:'Gimnasio',preci:'Incluido'},
  { src: './assets/images/carta/salajuegos.jpg', alt: 'Descripción de la imagen 5' ,platillo:'Sala de juegos',preci:'Incluido'},
  { src: './assets/images/carta/spa.jpg', alt:'Descripción de la imagen 6',platillo:'Spa',preci:'Incluido'},
  { src: './assets/images/carta/piscina.png', alt: 'Descripción de la imagen 7' ,platillo:    'Piscina',preci:'Incluido'},
  { src: './assets/images/carta/bebidas-alimentos.jpg', alt: 'Descripción de la imagen 8' ,platillo:   'Alimentos y bebidas',preci:'Incluido'},
  ];
  @Input() columns = 5;
  @Input() price: {preci:string}[]=[
  {preci:'210'},
  {preci:'210'},
  {preci:'250'},
  {preci:'60'},
  {preci:'75'},
  {preci:'100'},
  {preci:'200'},
  {preci:'400'},
  {preci:'210'},

  ];
}