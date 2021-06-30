import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  
  constructor(private service:UserServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(details:any){
    console.log(details)
    this.service.updatePofile(details).subscribe(data=>{
      console.log(data.feedback)
      this.route.navigate(['/user'])
      // if(data.feedback==='updated'){
           // }
    })
  }



}
