import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';
import { User } from '../models/user'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  users: User[];

  constructor(
    private userService: userService
  ) {this.users = this.userService.getUsers();
  }

  onSubmit(e: Event, form: NgForm) {
    e.preventDefault();
    this.userService.addUser(form.controls["firstName"].value, form.controls["lastName"].value, form.controls["email"].value, form.controls["age"].value);
  }

}
