import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employes-interface',
  templateUrl: './employes-interface.component.html',
  styleUrls: ['./employes-interface.component.css']
})
export class EmployesInterfaceComponent implements OnInit{
  windowHeight = window.innerHeight;
  rowHeight = 50; 
  employes: any[]=[];
  employeProfil: any;
  firstName:any;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  constructor(public rs:RestService,private router: Router,public route: ActivatedRoute){}
  ngOnInit(): void {
    this.rs.getData("Agents").then((data) => {
      this.employes=data;
    }); 
   
  }

  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    }
    else{
      this.employes=this.employes.filter(res =>{
        return res.nom.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }
  key:string = 'id';
  reserve:boolean =false;
  sort(key: string, a: number) {
    this.key = key;
    let compareFunction: (a: any, b: any) => number;
  
    if (a === 1) {
      compareFunction = (a, b) => (a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0);
    } else {
      return; 
    }
  
    this.employes.sort(compareFunction);
    this.reserve = !this.reserve;
  }

  clickedRowIndex: number = -1;

  handleRowClick(index: number, emp: any): void {
    this.clickedRowIndex = index;
    this.employeProfil=emp;
    this.onChangePage('sidebar/employeprofil');

  }
  onChangePage(page:string ){
   
    this.router.navigate([page],
      { queryParams: {employe:JSON.stringify(this.employeProfil) } }
    );
  }
}


