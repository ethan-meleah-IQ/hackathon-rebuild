import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = {};
  
  constructor(private userService: UserService, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    const currentId = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(currentId)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.user = data;
        },
        error: (e) => console.error(e)
      });
  }

}
