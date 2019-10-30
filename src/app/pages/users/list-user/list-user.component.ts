import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private _restService: RestService, private router:Router) { }

  deleteUser(id){
    var r = confirm('Deleted user ?');
    if(r == true) {
      console.log('ok');
      this._restService.deleteUser(id).subscribe(response => {
        this._restService.getUsers().subscribe((data: User[]) => {
          this.users = data;
        })
      })
    } else {
      console.log('pas ok');
    }
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
