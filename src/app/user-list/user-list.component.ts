import { Component, OnInit ,Input, Output, EventEmitter}from '@angular/core';
import {User} from '../user/user';
//ng g component UserList
@Component({
  selector: 'app-user-list',
  template:require("./user-list.component.html"),
  inputs:['userList']  
})
export class UserListComponent implements OnInit {
  userList:Array<User>;
  //@Inputs()userNameList:Array<User>;
  constructor() { }

  isTest : boolean = true;
  @Output() outputTest = new EventEmitter<boolean>();

  passValueToParent(){
    this.isTest = !this.isTest;
    this.outputTest.emit(this.isTest);
  }
  ngOnInit() {
  }

}
