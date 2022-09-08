import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/pages/communication.component';
import { CounterComponent } from './counter/counter.component';
import { DataLibraryComponent } from './data-library/data-library.component';
import { DisplayComponent } from './display/display.component';
import { LightsComponent } from './lights/lights.component';
import { SearchComponent } from './search/pages/form/search.component';
import { FormComponent } from './crud/pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'communication', component: CommunicationComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'crud', component: FormComponent },
      { path: 'data-library', component: DataLibraryComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'lights', component: LightsComponent },
      { path: 'search', component: SearchComponent },
      { path: '**', redirectTo: 'display' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
