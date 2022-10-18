import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  studentdata=[
    {
      name: "rakhesh",
      rollno: "1",
      admsn: "1001",
      college: "RIT",
      dept:"mca",
      blood:"A+ve",
      dob:"18-09-1999",
      parent:"gopal",
      pemail:"gopal@gmail.com",
      guardian:"mahesh kumar",
      gaddress:"bangalore"
    }
  ]

  ngOnInit(): void {
  }

}
