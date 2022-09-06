import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { User } from '../interfaces/users.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  users: User[] = [];

  constructor( private crudService: CrudService ) { }

  ngOnInit(): void {
    this.crudService.getUsers()
      .subscribe( users => {
        this.users = users
        });
  }

}
