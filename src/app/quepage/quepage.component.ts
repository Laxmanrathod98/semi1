import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Event, ParamMap, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-quepage',
  templateUrl: './quepage.component.html',
  styleUrls: ['./quepage.component.css']
})
export class QuepageComponent implements OnInit {

  id: any;
  iddata: any;
  tag: any;
  editor: Editor = new Editor;
  html: any;
  texthtml: any;
  emailId: any
  votes: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private service: UserServiceService) { }

  questionId: any;
  ngOnInit(): void {
    this.editor = new Editor();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })

    console.log(this.id)
    this.gets().subscribe(
      data => {
        this.iddata = data
        console.log(data);
        console.log(data[0].answer.length);
        this.votes = data[0].votes
        // this.service.setAnswer(data[0].answer.length)
        this.texthtml = data[0].body;
        this.questionId = data[0]._id;
        console.log(this.questionId);
        this.tag = this.iddata.tag;
      }

    )
  }





  answer: any;
  cont: any
  onSubmit(data: any) {
    this.answer = data.value.answer.content[0].content[0];
    this.cont = data.value.answer.content
    console.log(this.cont)
    // for(let i=0;i<this.cont.length;i++){

    // }
    console.log(this.answer);
    this.postAnswer(this.answer).subscribe(data => {
    })

    // setTimeout(() => {
    //   this.router.navigate(['/questions'])
    // }, 1300);
  }
  upvote() {
    console.log("ssdds");
    this.emailId = localStorage.getItem('userMail');
    this.up(this.iddata).subscribe(data => {
      console.log("upvoted")
    })
  }
  downvote() {
    this.emailId = localStorage.getItem('userMail');
    this.down(this.iddata).subscribe(data => {
      console.log("downvoted")
    })
  }

  //answer upvote
  ansUpVote(ansId: any) {
    console.log(ansId)
    this.emailId = localStorage.getItem('userMail');
    var data = {
      email: this.emailId,
      ansId: ansId

    }
    this.up1(data).subscribe(data => {
      console.log('answer upvotes')
    })
  }

  //for answer downvote
  ansDownVote(ansId: any) {
    console.log(ansId)
    this.emailId = localStorage.getItem('userMail');
    var data = {
      email: this.emailId,
      ansId: ansId

    }
    this.down1(data).subscribe(data => {
      console.log('answer down voted')
    })
  }


  //APIs
  //APIs
  //for upvote
  up(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/upvote/${this.emailId}`, data)
  }

  //for down vote
  down(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/downvote/${this.emailId}`, data)
  }

  //for answer upvote
  up1(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/answerUpvote/${this.questionId}`, data)
  }

  //for answer downvote
  down1(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/answerDownvote/${this.questionId}`, data)
  }

  gets() {
    return this.http.get(`http://localhost:3000/quesdetail/${this.id}`)
  }
  postAnswer(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/postAnswer/${this.id}`, data)
  }

}
