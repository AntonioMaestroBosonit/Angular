import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { ChildComponent }         from './communication/pages/child.component';
import { CommunicationComponent } from './communication/pages/communication.component';
// import { DataService }         from './communication/services/data.service';
import { ControllersComponent }   from './counter/components/controllers/controllers.component';
import { CounterComponent }       from './counter/pages/counter.component';
import { ScreenComponent }        from './counter/components/screen/screen.component';
import { CrudComponent }          from './crud/pages/table/crud.component';
import { FormComponent }          from './crud/pages/form/form.component';
import { BarComponent }           from './data-library/components/bar/bar.component';
import { DataLibraryComponent }   from './data-library/pages/data-library.component';
import { DonutComponent }         from './data-library/components/donut/donut.component';
import { DisplayComponent }       from './display/display.component';
import { ControllerComponent }    from './lights/components/controller/controller.component';
import { LightsComponent }        from './lights/pages/lights.component';
import { TrafficLightComponent }  from './lights/components/traffic-light/traffic-light.component';
import { ListComponent }          from './search/pages/list/list.component';
import { SearchComponent }        from './search/pages/form/search.component';


@NgModule({
  declarations: [
    BarComponent,
    ChildComponent,
    CommunicationComponent,
    ControllerComponent,
    ControllersComponent,
    CounterComponent,
    CrudComponent,
    DataLibraryComponent,
    DisplayComponent,
    DonutComponent,
    FormComponent,
    LightsComponent,
    ListComponent,
    SearchComponent,
    ScreenComponent,
    TrafficLightComponent,
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
