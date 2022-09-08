import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';

import { CommunicationComponent } from './communication/pages/communication.component';
import { ChildComponent } from './communication/pages/child.component';
// import { DataService } from './communication/services/data.service';
import { FormComponent } from './crud/pages/form/form.component';
import { CrudComponent } from './crud/pages/table/crud.component';
import { CounterComponent } from './counter/counter.component';
import { DataLibraryComponent } from './data-library/data-library.component';
import { DisplayComponent } from './display/display.component';
import { LightsComponent } from './lights/lights.component';
import { SearchComponent } from './search/pages/form/search.component';
import { ListComponent } from './search/pages/list/list.component';


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
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    // DataService      //compruebo si puedo quitarlo
  ]
})
export class EjerciciosModule { }
