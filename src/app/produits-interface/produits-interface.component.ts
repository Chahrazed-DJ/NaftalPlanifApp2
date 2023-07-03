import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Produits } from '../models/produits';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-produits-interface',
  templateUrl: './produits-interface.component.html',
  styleUrls: ['./produits-interface.component.css']
})
export class ProduitsInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50;
  produits: any[]=[];
  categorie:any;
  nomProduit:any;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  constructor(public rs:RestService){}
   ngOnInit(){
    this.rs.getData("Produits").then((data) => {
    this.produits=data;
    /*this.returnCatName(this.produits[0].categoryId).then((value)=>{
      console.log(value);
    })*/
  })
  .catch((error) => {
    console.log(error);
  });
  
  }
 
  /*async returnCatName(prod:any):Promise<string>{
    await this.rs.getDataWithId(prod,"Categories").then((data) => {
      this.categorie=data;
    })
    return this.categorie.name;
  }*/

  
  Search(){
    if(this.nomProduit==""){
      this.ngOnInit();
    }
    else{
      this.produits=this.produits.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.nomProduit.toLocaleLowerCase());
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
  
    this.produits.sort(compareFunction);
    this.reserve = !this.reserve;
  }
}
