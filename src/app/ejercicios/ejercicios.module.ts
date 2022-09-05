import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CommunicationComponent } from './communication/pages/communication.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/pages/crud.component';
import { DataLibraryComponent } from './data-library/data-library.component';
import { DisplayComponent } from './display/display.component';
import { LightsComponent } from './lights/lights.component';
import { SearchComponent } from './search/search.component';
import { ChildComponent } from './communication/pages/child.component';
import { DataService } from './communication/services/data.service';
import { FormComponent } from './crud/pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommunicationComponent,
    CounterComponent,
    CrudComponent,
    DataLibraryComponent,
    DisplayComponent,
    LightsComponent,
    SearchComponent,
    ChildComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ]
})
export class EjerciciosModule { }
