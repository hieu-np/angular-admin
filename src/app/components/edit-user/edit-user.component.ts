import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user?:User;
  
  constructor(
    private userService : UserService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getUser();
    
  }

  getUser(): void{
    this.route.queryParams.subscribe((data) => {
      let { id } = data;
      id = id + "";
      this.userService.getUser(+id).subscribe(user => this.user = user);
      // this.userService.getUser(id).subscribe(user => {console.log(user);
    });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

}
