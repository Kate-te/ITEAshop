import { Component, OnInit } from '@angular/core';
import {boldDirective} from '../directives/bold.directive';
import { userService } from '../services/user.service';
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navItems: Array<string> = ['Home', 'Shop', 'ContactUs'];
  users: User[];
  x: number = 5;
  friends: Array<any> = ["Kate", "Alex", "Dimas", "Yaruk", "Vanya"];
  size: string ="24px";

  constructor(
    private userService: userService
  ) { }

  onclick(e: Event){
    this.size = "48px";
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
