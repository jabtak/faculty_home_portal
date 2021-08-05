import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/faculty/faculty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/register/mustmatch';
import { Faculty } from 'src/app/register/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerForm!: FormGroup;
  //imageSrc: string;
  gridColumns = 3;
  minDate = new Date(2010, 4, 12); 
  formdata = new FormData();
  
  submitted = false;
  facultyinfo: Faculty;
  constructor( private facultyservice:FacultyService,private formBuilder: FormBuilder) { 
  this.facultyinfo = new Faculty();
  }
  ngOnInit(): void {

    
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(5)]],
     
      email: ['', [Validators.required, Validators.email]],
      phone:['',[Validators.required,Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
    
 

    
  debugger;
  

  let facultyid = localStorage.getItem("userid");
 
  this.facultyservice.getUser(facultyid).subscribe((data:any)=>{
   debugger;

   this.facultyinfo.fname= data.fname;//each propery we can set here
   this.facultyinfo.lname = data.lastname;
   
   
   // if backend model and front end model are identical then // this.faculatyInfo=data;
   this.facultyinfo=JSON.parse(JSON.stringify(data));
   console.log(this.facultyinfo);
})
}
get f() { return this.registerForm.controls; }

editProfile(){
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    alert("Please fill required fields");
    return;
  }
  else{
  console.log("submittteeeed",this.facultyinfo);
  alert(" update Success");
  this.facultyservice.editUser(this.facultyinfo)
    //updated

  console.log("update",this.facultyinfo);
 // this.router.navigate(['products']);
  }
}

onChangeSelection(selected: string) {
  var chang = parseInt(selected);
  console.log(chang);
}
}

