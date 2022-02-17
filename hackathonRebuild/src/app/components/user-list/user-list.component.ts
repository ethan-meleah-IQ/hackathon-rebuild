import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  email = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.userService.getAllUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  deleteAllUsers(): void {
    this.userService.deleteAllUsers()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchUser(): void {
    this.currentUser = {};
    this.currentIndex = -1;
    this.userService.getUserByEmail(this.email)
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (e) => console.error(e)
      });
  }

  
}
