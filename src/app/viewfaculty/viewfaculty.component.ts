import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }

  facultyData=[
    {
      name: "Prof.Tomcy paul",
      dept:"mca",
      designation:"Associate professor",
      dob:"18-09-1972",
      edqualification:"phd",
      address:"bangalore",
      mobile:"8956231123",
      doj:"20-05-2019",
      
    }
  ]

  ngOnInit(): void {
  }

}
