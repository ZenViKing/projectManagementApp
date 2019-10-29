import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private _restService: RestService, private router:Router) { }


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
