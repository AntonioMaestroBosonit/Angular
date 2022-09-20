import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
  ]
})

export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/ejercicios/display', texto: 'Mostrar' },
    { ruta: '/ejercicios/communication', texto: 'Comunicación' },
    { ruta: '/ejercicios/crud', texto: 'CRUD' },
    { ruta: '/ejercicios/search', texto: 'Buscador' },
    { ruta: '/ejercicios/lights', texto: 'Semáforo' },
    { ruta: '/ejercicios/data-library', texto: 'Gráfica' },
    { ruta: '/ejercicios/counter', texto: 'Contador' },
  ]

  ngOnInit(): void {
    this.onResize(window.innerWidth);
  }

  //Evento al modificar el tamaño de la web.
  //Obtengo el ancho de pantalla y hago ternaria con el valor de col-md
  //que pone o quita la clase de lista para mostrarla en horizontal
  
  onResize(event: any) {
    let menu: DOMTokenList | undefined = document.getElementById('list')?.classList;
    let width: number = window.innerWidth;
    width <= 768 ? menu?.add('list-group-horizontal','mb-3') : menu?.remove('list-group-horizontal')
  }
  //Hago OnInit para que ejecute el método al empezar también. cambio la forma de obtener
  //el ancho para que se pueda usar en ambos sitios.
}
