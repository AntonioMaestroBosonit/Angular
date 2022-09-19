import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent {

  @Input()
  users: User[] = [];

  @Output()
  user = new EventEmitter<User>();

  getUsers(){
    this.crudService.getUsers()
    .subscribe( users => {
      this.users = users
    });
  }

  constructor( private crudService: CrudService ) { }

  delete( id: number | undefined) {
    this.crudService.deleteUser( id )
      .subscribe( res => {
        // console.log( res );
        this.getUsers();
      })
  }

  update( user: User ){
    this.user.emit( user );
    // console.log( user );
    
  }

}
