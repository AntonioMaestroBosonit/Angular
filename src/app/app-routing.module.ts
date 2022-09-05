import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'ejercicios',
    loadChildren: () => import ( './ejercicios/ejercicios.module' ).then( m => m.EjerciciosModule )
  },
  {
    path: '**', redirectTo: 'ejercicios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
