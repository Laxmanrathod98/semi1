import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private route:Router ,private service:UserServiceService) { }
  email: any;
  Userdata: any;
  userPass: any;
  loggedIn:boolean=false;
  onSubmit(details: any) {
    console.log(details);
    this.email = details.email;
    localStorage.setItem('userMail',this.email);
    console.log(this.email);
    this.matchEmail().subscribe(data => {
      this.Userdata = data;
      console.log(this.Userdata)
      if (this.Userdata.book1 === null) {
        console.log('user not found')
      } else {
        this.userPass = this.Userdata.book1.pass;
        if (this.userPass === details.pass) {
          if(this.Userdata.book1.confirm==true){
            const h1=document.getElementById('demo');
            h1!.innerHTML='Login successfull';
            h1!.style.color='red';
            this.loggedIn=true;
            this.service.setFlag(this.loggedIn);
            this.route.navigate(['/questions'])

          }else{
            const h1=document.getElementById('demo');
            h1!.innerHTML='Please verify link';
            h1!.style.color='red'
          }
          // console.log('log in successful');
        } else {
          console.log('password is wrong');
          const h1=document.getElementById('demo');
          h1!.innerHTML='Invalid Credentials';
          h1!.style.color='red'

        }
      }

    })

  }

  matchEmail(): Observable<any> {
    return this.http.get(`http://localhost:3000/forms/${this.email}`);
  }
  ngOnInit(): void {
  }

}
