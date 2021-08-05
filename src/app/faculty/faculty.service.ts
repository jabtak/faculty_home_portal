import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  [x: string]: any;
  faculties= {
    userid:'',
    firstname : '',
    lname: '',
    user_email : '',
    password : '',
    phone_number : '',
    skills:'',
    dateofjoining:'',
    coursehandling:''
  }
  constructor(private http:HttpClient) { }
  // getUser(id:any){
  //   return this.http.get("http://localhost:3000/"+id);
  // }
  getUser(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  
  getUsers(){
    return this.http.get("http://localhost:3000/users");
  }
  Verifyusers(){
    return this.http.get("http://localhost:3000/verify");
  }
  // newUser(item: ProductModel)
  // {
  //   return this.http.post("http://localhost:3000/insert",{"product":item})
  //   .subscribe(data => {console.log(data);
  //   })
  // }
  deleteUser(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editUser(faculties:any)
  {
    console.log('client update')
    console.log(faculties);
    return this.http.put("http://localhost:3000/update",faculties)
    .subscribe(data =>{console.log(data)})
  }
  readmore(id:any){
    console.log("hereeeeeeeeeeeeeee");
    
    return this.http.get("http://localhost:3000/"+id);

  }
  
}
