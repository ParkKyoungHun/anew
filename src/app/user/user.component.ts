import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import {User} from './user';

@Component({
  selector: 'app-user',
  template:require("./user.component.html"),
  providers:[UserDataService]
})
export class UserComponent implements OnInit {
  userList:Array<User>=[];
  searchUser:User = new User();
  errorMsg:string = '';
  addUserShow:boolean = false;
  addUserBtnStr:string='Show Add User Div';
  constructor(private uds: UserDataService) { }

  ngOnInit() {
  }
  
  getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      users => {
        this.userList = users
        console.log(users);
      },
      error =>  this.errorMsg = <any>error);
  }

  showHideAddUserDiv():void{
    this.addUserBtnStr='Show Add User Div';
    this.addUserShow = !this.addUserShow;
    if(this.addUserShow)
    this.addUserBtnStr='Hide Add User Div';
  }
}
