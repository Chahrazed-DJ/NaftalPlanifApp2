import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { Ventes } from '../models/ventes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventes-interface',
  templateUrl: './ventes-interface.component.html',
  styleUrls: ['./ventes-interface.component.css']
})
export class VentesInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50;
  ventes: Ventes[]=[];
  nomClient:any;
  p:number =1; selectedField: string="";
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  montantsCalcules: number[] = [];
  constructor(public rs:RestService,private router: Router){}  
  ngOnInit(): void {
    this.rs.getData("Ventes").then((data) => {
      this.ventes=data;
      this.ventes.map(vente => {
       
          this.montantsCalcules.push(this.calculMontant(vente));
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
      this.ventes=this.ventes.filter(res =>{
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
    } else if (a === 3) {
      compareFunction = (a, b) => (a.entreprise[key] < b.entreprise[key]) ? -1 : ((a.entreprise[key] > b.entreprise[key]) ? 1 : 0);
    }  else if (a === 4) {
      compareFunction = (a, b) => (a.employee[key] < b.employee[key]) ? -1 : ((a.employee[key] > b.employee[key]) ? 1 : 0);
    } else {
      return; 
    }
  
    this.ventes.sort(compareFunction);
    this.reserve = !this.reserve;
  }
  
  clickedRowIndex: number = -1;

  handleRowClick(index: number, vente:Ventes): void {
    const queryParams = {
      data: JSON.stringify(vente)
    };
    this.clickedRowIndex = index;
    if(vente.status===1) this.router.navigate(['sidebar/produitvendusucces'],{queryParams});
    else if(vente.status===0)  this.router.navigate(['sidebar/produitvenduencours'],{ queryParams});
         else if(vente.status==2) this.router.navigate(['sidebar/produitvenduechoue'],{ queryParams});
  }

  calculMontant(vente:any): number{
      let a:number=0;    
      if (vente.status === 1 )
      for (let i = 0; i < vente.produits.length; i++) 
      { const item = vente.produits[i];
        a=a+item.vendu;
      }
   return a;
  }
}
