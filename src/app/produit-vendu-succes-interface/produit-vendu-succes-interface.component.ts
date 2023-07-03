import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-vendu-succes-interface',
  templateUrl: './produit-vendu-succes-interface.component.html',
  styleUrls: ['./produit-vendu-succes-interface.component.css']
})
export class ProduitVenduInterfaceComponent implements OnInit {
  windowHeight = window.innerHeight;
  rowHeight = 50; venteSucces:any; age:any;
  dateAssign:any; dateFinish:any;
  produitvendu: any;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  constructor(public rs:RestService, public route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.venteSucces = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.venteSucces.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.venteSucces.createdAt);


      this.dateFinish= this.rs.getMyFormat(this.venteSucces.finishedAt);
      this.produitvendu=this.venteSucces.produits;
    
   });
  }
  download(): void {
    this.rs.downloadImage(this.venteSucces);
  }

  key:string = 'id';
  reserve:boolean =false;
  sort(key: string){
   this.key=key;
   this.reserve=!this.reserve;
  }
  activeLinkIndices: boolean[] = [true];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
