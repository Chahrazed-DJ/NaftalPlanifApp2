import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { Router } from '@angular/router';
import { Recouvrements } from '../models/recouvrements';

@Component({
  selector: 'app-recouvrements-interface',
  templateUrl: './recouvrements-interface.component.html',
  styleUrls: ['./recouvrements-interface.component.css']
})
export class RecouvrementsInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50;
  recouvrements: any[]=[];
  nomClient:any;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  montantsCalcules: number[] = [];
  constructor(public rs:RestService,private router: Router){}  
  ngOnInit(): void {
    this.rs.getData("Recouvrement").then((data) => {
      this.recouvrements=data;
      this.recouvrements.map(rec => {
        
          this.montantsCalcules.push(this.calculMontant(rec));
        
      });
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  Search(){
    if(this.nomClient==""){
      this.ngOnInit();
    }
    else{
      this.recouvrements=this.recouvrements.filter(res =>{
        return res.employee.nom.toLocaleLowerCase().match(this.nomClient.toLocaleLowerCase());
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
    } else if (a === 2) {
      compareFunction = (a, b) => (a.client[key] < b.client[key]) ? -1 : ((a.client[key] > b.client[key]) ? 1 : 0);
    }   else if (a === 3) {
      compareFunction = (a, b) => (a.employee[key] < b.employee[key]) ? -1 : ((a.employee[key] > b.employee[key]) ? 1 : 0);
    } else {
      return; 
    }
  
    this.recouvrements.sort(compareFunction);
    this.reserve = !this.reserve;
  }
  clickedRowIndex: number = -1;

  handleRowClick(index: number, rec:Recouvrements): void {
    const queryParams = {
      data: JSON.stringify(rec)
    };
    this.clickedRowIndex = index;
    if(rec.status===1) this.router.navigate(['sidebar/facturespayeessucces'],{queryParams});
    else if(rec.status===0)  this.router.navigate(['sidebar/facturespayeesencours'],{ queryParams});
         else if(rec.status===2) this.router.navigate(['sidebar/facturespayeesechoue'],{ queryParams});
  }
  calculMontant(rec:any): number{
    let a:number=0;    
    if (rec.status === 1 )
    for (let i = 0; i < rec.factures.length; i++) 
    { 
      const item = rec.factures[i];
      a=a+item.montantPaye;
    }
    
 return a;
  }
}
