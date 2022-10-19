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
      doj:"20-05-2017",
      
    },
    {
      name: "Prof.Reena",
      dept:"Btech",
      designation:"Associate professor",
      dob:"18-09-1972",
      edqualification:"MSc",
      address:"kochi",
      mobile:"7854962130",
      doj:"20-04-2017",
      
    },
    {
      name: "Prof.Sajeena",
      dept:"civil",
      designation:"Assistant professor",
      dob:"20-09-1989",
      edqualification:"MSc",
      address:"kottayam",
      mobile:"8501369740",
      doj:"20-04-2019",
      
    },
    {
      name: "Prof.john",
      dept:"EEE",
      designation:"HOD of EEE",
      dob:"15-09-1962",
      edqualification:"Btech",
      address:"tvm",
      mobile:"8521496307",
      doj:"02-05-2015",
      
    },
    {
      name: "Prof.vineetha",
      dept:"MBA",
      designation:"Associate professor",
      dob:"18-09-1982",
      edqualification:"phd",
      address:"kozhikode",
      mobile:"8549671230",
      doj:"20-05-2019",
      
    }
  ]

  ngOnInit(): void {
  }

}
