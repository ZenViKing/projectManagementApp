import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private _restService: RestService) { }

  delUser(id) {

    var r = confirm("Are you sure that you want to delete this user?");
    if (r == true) {
      console.log("TEST 2");

    }
    else {
      console.log("test 3")
    }


  }

  deleteUser(id) {
    this._restService.deleteUser(id).subscribe(res => {
      this._restService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      })
    })
  }

  //  delUser(){
  //   var txt;
  //   var r = confirm ("Are you sure that you want to delete this user?");
  //   if (r==true){



  // //   else {
  // //     txt= "Blablabla"
  // //   }

  // //   }
  // // }

  ngOnInit() {
    this._restService.getUsers().subscribe((data: User[]) => {
      this.users = data;


    })
  }

}
