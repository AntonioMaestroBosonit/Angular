import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Users } from '../interfaces/users.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  users: Users[] = [];

  constructor( private crudService: CrudService ) { }

  ngOnInit(): void {
    this.crudService.getUsers()
      .subscribe( users => {
        this.users = users
        });
  }

}
