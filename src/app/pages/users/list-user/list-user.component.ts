import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users:User[];

  constructor(private _restService: RestService) { }

  deleteUser(id){
    prompt('Are you sure to delete this user?')
    this._restService.deleteUser(id).subscribe(res =>{
      this._restService.getUsers().subscribe((data:User[])=>{
        this.users=data;
        alert('User deleted successfully.')
      })
    })
  }

  


  ngOnInit() {
    this._restService.getUsers().subscribe((data:User[])=>{
      this.users=data;


    })
  }

}
