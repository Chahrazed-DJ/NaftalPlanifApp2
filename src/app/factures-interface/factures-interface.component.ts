import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-factures-interface',
  templateUrl: './factures-interface.component.html',
  styleUrls: ['./factures-interface.component.css']
})
export class FacturesInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50;
  factures: any[]=[];
  facturesRec:any;
  nomClient:any;
  p:number =1;
  
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  constructor(public rs:RestService){}
  ngOnInit(): void {
    this.rs.getData("Recouvrement").then((data) => {
      this.facturesRec=data;
      this.facturesRec.map((d: any) => {
        const facturesAvecNom = d.factures.map((facture: any) => {
          return {
            ...facture,
            nomclient: d.client.nom
          };
        });
        this.factures.push(...facturesAvecNom);
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
      this.factures=this.factures.filter((res: { nomclient: string; }) =>{
        return res.nomclient.toLocaleLowerCase().match(this.nomClient.toLocaleLowerCase());
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
  
    this.factures.sort(compareFunction);
    this.reserve = !this.reserve;
  }
   getFormatDate(d:any)
   {
    return this.rs.getMyFormat(d);
   }

}
