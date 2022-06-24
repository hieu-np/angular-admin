import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  txtName: string = '';
  txtPhone: string = '';
  txtEmail: string = '';
  txtAddress: string = '';
  txtAge: string = '';
  sltAdmin: string = '0';
  subscription: Subscription | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.txtName){
      alert('Please add a name!!!!');
      return;
    }
    if(!this.txtPhone){
      alert('Please add a phone!!!!');
      return;
    }
    if(!this.txtEmail){
      alert('Please add a email!!!!');
      return;
    }
    if(!this.txtAddress){
      alert('Please add a address!!!!');
      return;
    }
    if(!this.txtAge){
      alert('Please add a age!!!!');
      return;
    }

    // Những thứ cần gửi đến server
    const newUser = {
      name: this.txtName,
      age: parseInt(this.txtAge),
      phone: parseInt(this.txtPhone),
      email: this.txtEmail,
      address: this.txtAddress,
      admin: parseInt(this.sltAdmin),
    }
    
    

    // Ko gửi ở nơi đây, mà gửi ở component cha, tạo sự kiện emit event

    this.onAddUser.emit(newUser);

    this.txtName = '';
    this.txtPhone= '';
    this.txtEmail = '';
    this.txtAddress = '';
    this.txtAge = '';
    this.sltAdmin = '0';
  }

}
