import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { User } from '../models/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isFormSubmitted: boolean;
  users: User[];
  userForm: FormGroup;
  selectedUser: User;
  REG_EXP: any = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {this.users = this.userService.getUsers();
  }

  onSubmit(e: Event, form: FormGroup) {
    this.isFormSubmitted = true;
    e.preventDefault();

    this.userForm.controls["firstName"].markAsUntouched();
    this.userForm.controls["lastName"].markAsUntouched();
    this.userForm.controls["email"].markAsUntouched();

  if(this.userForm.valid) {
    let user: User = form.value;
    this.userService.addUser(user);
    this.userForm.reset();
    this.isFormSubmitted = false;
  }

  }

  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsTouched();
  }

  onSelect(usr: User){
    this.selectedUser = usr;
    this.userForm.controls['firstName'].setValue( this.selectedUser.firstName);
    this.userForm.controls['lastName'].setValue( this.selectedUser.lastName);
    this.userForm.controls['email'].setValue( this.selectedUser.email);
    this.userForm.controls['age'].setValue( this.selectedUser.age);
    this.userForm.controls['id'].setValue(this.selectedUser.id);
    
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [this.selectedUser ? this.selectedUser.id : null],
      firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
      lastName: [this.selectedUser ? this.selectedUser.lastName : null, Validators.required],
      email: [this.selectedUser ? this.selectedUser.email : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      age: [this.selectedUser ? this.selectedUser.age : null, Validators.required],
    })
  }

}
