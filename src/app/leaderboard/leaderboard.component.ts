import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private service:UserServiceService) { }
  showpost;
  userdata;
  count=0;
  ngOnInit(): void {
    this.service.getUserDataComplete().subscribe(data=>{
      console.log(data)
      this.userdata=data.forms
    });
  }
}
