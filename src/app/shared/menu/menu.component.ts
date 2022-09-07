import { Component } from '@angular/core';

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

export class MenuComponent {

  menu: MenuItem[] = [
    { ruta: '/ejercicios/display', texto: 'Mostrar / Ocultar' },
    { ruta: '/ejercicios/communication', texto: 'Comunicación' },
    { ruta: '/ejercicios/crud', texto: 'CRUD' },
    { ruta: '/ejercicios/search', texto: 'Buscador' },
    { ruta: '/ejercicios/lights', texto: 'Semáforo' },
    { ruta: '/ejercicios/data-library', texto: 'Gráfica' },
    { ruta: '/ejercicios/counter', texto: 'Contador' },
  ]

}
