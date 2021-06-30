import { Component, OnInit } from '@angular/core';
import { Ask } from './askmodel'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Editor } from 'ngx-editor';
import { toDoc } from 'ngx-editor';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  constructor(private http: HttpClient,private route:Router,private service:UserServiceService) { }
  
  ask = new Ask("","","",[""])
  submit=0;  
  editor: Editor = new Editor;
  html: string | undefined;
  Useremail:any;
  onSubmit(){
    this.Useremail=localStorage.getItem('userMail');
    this.ask.email=this.Useremail;
    //console.log(this.ask)
    this.postquestion(this.ask).subscribe(
      data => console.log(data)
    )
    this.submit=1;
    setTimeout( () =>{
    //  this.route.navigate(['/questions'])
    } , 2000);
    
  }


  //APIs

  postquestion(ask:any){
    return this.http.post(`http://localhost:3000/ask`,ask)
  }
  dropdownList: { item_id: number; item_text: string; }[] = [];
  selectedItems: any ;
  dropdownSettings!: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAllText: string; itemsShowLimit: number; allowSearchFilter: boolean; };

  ngOnInit() {
    this.editor = new Editor();
    // const jsonDoc = toDoc(this.html);
    // console.log(jsonDoc);
    this.dropdownList = [
      { item_id: 1, item_text: 'C' },
      { item_id: 2, item_text: 'Java' },
      { item_id: 3, item_text: 'C#' },
      { item_id: 4, item_text: 'HTML' },
      { item_id: 5, item_text: 'CSS' }
    ];
    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
}

