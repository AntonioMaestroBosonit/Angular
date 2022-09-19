import { Component, OnInit } from '@angular/core';
import { Universities } from '../../interfaces/universities.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  universities: Universities[] = [];

  form: FormGroup = this.fb.group(
    {
      country: [ "Spain" ],
      name: [ undefined ]
    }
  )

  constructor( private fb: FormBuilder,
               private universitiesService: UniversitiesService ) { }

    ngOnInit(): void {

    }

  search() {
    //Ternaria para que si borro todo el contenido, no aparezca nada en vez de todo
    this.form.controls['name'].value == "" ? this.universities = [] : 
    this.universitiesService.getUniversities( this.form.value['country'], this.form.value['name'])
      .subscribe( res => {
        this.universities = res;
      })

  }

}
