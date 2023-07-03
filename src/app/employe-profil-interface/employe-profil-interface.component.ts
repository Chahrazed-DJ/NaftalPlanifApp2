import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { Ventes } from '../models/ventes';
import { Recouvrements } from '../models/recouvrements';

@Component({
  selector: 'app-employe-profil-interface',
  templateUrl: './employe-profil-interface.component.html',
  styleUrls: ['./employe-profil-interface.component.css']
})
export class EmployeProfilInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50; montantsCalculesV:any[]=[];
  ventes: any;    montantsCalculesR:any[]=[];
  recouvrements: any;
  p:number =1;  occurrences: { [key: number]: number } = { 0: 0, 1: 0, 2: 0 };
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  employeProfil: any; age:any; 
  constructor(public rs:RestService,public route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeProfil = JSON.parse(params['employe']);
      const timestampDate = new Date(this.employeProfil.dateNaissance.seconds * 1000 );
      this.age = new Date().getFullYear()- timestampDate.getFullYear();
      

      this.rs.getElements("Ventes","employee.id",this.employeProfil.id).then((data)=>{
        this.ventes=data;
        this.compterOccurrencesStatus(this.ventes);
        this.ventes.map((vente: any) => {
          this.montantsCalculesV.push(this.calculMontantVente(vente));
      });
       
      });
      
      this.rs.getElements("Recouvrement","employee.id",this.employeProfil.id).then((data)=>{
        this.recouvrements=data;
        this.compterOccurrencesStatus(this.recouvrements)
        this.recouvrements.map((rec: any) => {
          this.montantsCalculesR.push(this.calculMontantRec(rec));
      });
      });
       
    }); 
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
    } else {
      return; 
    }
  
    this.ventes.sort(compareFunction);
    this.reserve = !this.reserve;
  }
  sort2(key: string, a: number) {
    this.key = key;
    let compareFunction: (a: any, b: any) => number;
  
    if (a === 1) {
      compareFunction = (a, b) => (a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0);
    } else if (a === 2) {
      compareFunction = (a, b) => (a.client[key] < b.client[key]) ? -1 : ((a.client[key] > b.client[key]) ? 1 : 0);
    }  else {
      return; 
    }

    this.recouvrements.sort(compareFunction);
    this.reserve = !this.reserve;
  }
  activeLinkIndices: boolean[] = [true];
  showBlock: boolean=true;
  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
    this.showBlock = !this.showBlock;
  }
  
  calculMontantVente(prod: any): number {
    let a:number=0;    
    if (prod.status === 1 )
        for (let i = 0; i < prod.produits.length; i++) {
          const item = prod.produits[i];
          a = a + item.vendu;
        }
    
    return a;
  }
  calculMontantRec(rec:any): number{
    let a:number=0;    
    if (rec.status === 1 )
    for (let i = 0; i < rec.factures.length; i++) 
    { 
      const item = rec.factures[i];
      a=a+item.montantPaye;
    }
    
 return a;
  }
  
  compterOccurrencesStatus(elements: any[]): any {
  
    elements.forEach((element) => {
      const status = element.status;
      if (this.occurrences[status] === undefined) {
        this.occurrences[status] = 1;
      } else {
        this.occurrences[status]++;
      }
    });
  
    return this.occurrences;
  }

}

