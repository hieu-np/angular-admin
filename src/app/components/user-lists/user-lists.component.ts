import { Component, OnInit } from '@angular/core';
import { cilInfo, cilX, cilOptions } from '@coreui/icons';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  icons = { cilInfo, cilX, cilOptions };
  users: User[] = [];
  constructor(private userService : UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users)
  }
  colors = [
    { color: 'dark' }
  ];


  onDeleteUser(user: User) {
    this.userService.deleteTask(user).subscribe(() => this.users = this.users.filter(
      (t)=> t.id !== user.id
      ))
  }
}
