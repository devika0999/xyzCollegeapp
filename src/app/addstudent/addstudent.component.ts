import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

      name= ""
      rollno= ""
      admsn= ""
      college= ""
      dept=""
      blood=""
      dob=""
      parentname=""
      parentemail=""
      guardianname=""
      guardianaddress=""

      readValues=()=>{
        let data={

          "name":this.name,
      "rollno":this.rollno,
      "admsn":this.admsn,
      "college":this.college,
      "dept":this.dept,
      "blood":this.blood,
      "dob":this.dob,
      "parentname":this.parentname,
      "parentemail":this.parentemail,
      "guardianname":this.guardianname,
      "guardianaddress":this.guardianaddress


        }
        console.log(data)
        this.myapi.addStudent(data).subscribe(
          (response)=>{
            console.log(response)
            alert("added")
          }
        )
      }

  

  ngOnInit(): void {
  }

}
