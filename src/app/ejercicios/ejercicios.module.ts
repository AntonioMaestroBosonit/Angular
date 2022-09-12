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
import { DataLibraryComponent } from './data-library/pages/data-library.component';
import { DisplayComponent } from './display/display.component';
import { LightsComponent } from './lights/lights.component';
import { SearchComponent } from './search/pages/form/search.component';
import { ListComponent } from './search/pages/list/list.component';
import { DonutComponent } from './data-library/components/donut/donut.component';
import { BarComponent } from './data-library/components/bar/bar.component';
import { NgChartsModule } from 'ng2-charts';


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
    ListComponent,
    DonutComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    // DataService      //compruebo si puedo quitarlo
  ]
})
export class EjerciciosModule { }
