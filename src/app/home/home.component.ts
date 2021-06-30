import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router'
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router,private service:UserServiceService) { }
 
  titles:any; 

  loadque(i:any){
    this.service.countViews(i._id,i).subscribe(data=>{
    })
    this.router.navigate(['/quesdetail',i._id])
  }

  arrayQ:any=[];
  ngOnInit(): void {
    this.service.getUserData1().subscribe(data=>{
      this.showpost=data;
      let k=0;
      for(let i=this.showpost.length;i>0;i--){
        this.arrayQ[k++]=this.showpost[i-1];
      }
      console.log(this.arrayQ);   
    })

  }
  today=Date.now();
  votes=0;
  showpost: any;
  answers=0;  
}
