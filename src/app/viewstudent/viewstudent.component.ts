import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewStudent().subscribe(
      (data)=>{
        this.studentdata=data
      }
    )
  }

  studentdata:any=[]

  ngOnInit(): void {
  }

}
