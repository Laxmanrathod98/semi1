import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  form: any;
  imageData: any;
  selectedFile:any;
  email:any;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('userMail')
    this.form = new FormGroup({
      email: new FormControl(this.email),
      image: new FormControl(null),
    });
  }

  onFileSelect(event: any) {
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile)
  }
pic:any
  onSubmit(){
    const fd=new FormData();
    fd.append('email',this.form.value.email);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    console.log(fd)
    this.onUpload(fd).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['/user'])
  }

  onUpload(data:any){
    return this.http.post('http://localhost:3000/uploadProfile',data)
  }


  

}
