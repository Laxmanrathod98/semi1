import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  email=localStorage.getItem("userMail")
  
  getUserData():Observable<any>{
    return this.http.get(`http://localhost:3000/forms/${this.email}`);
  }  

  updatePofile(data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/update/${this.email}`,data)
  }
  getUserData1(){
    let url='http://localhost:3000/enrollQuestionData';
    return this.http.get<any>(url);
 }
//  updateDate(data,value){
//   console.log(data);  
//   let urlUpdate=`http://localhost:8000/enrollUpdate/${data}`
//   console.log(urlUpdate);
//   console.log(value);
//   return this.http.patch<any>(urlUpdate,value[0]);
// }
showImage():Observable<any>{
  return this.http.get(`http://localhost:3000/uploadPic/${this.email}`)
}
getUserDataComplete():Observable<any>{
  return this.http.get(`http://localhost:3000/forms`);
}
// counter;
// setAnswer(count:any){
//   this.counter=count;
// }
// getAnswer(){
//   return this.counter;
// }
LogInflag:any;
setFlag(data:any){
  this.LogInflag=data;
}
getFlag(){
  return this.LogInflag;
}
countViews(data: any,value: any){
  return this.http.put(`http://localhost:3000/enrollUpdate/${data}`,value)
}
}
