import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FacturesPayees } from '../models/factures-payees';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factures-payees-succes-interface',
  templateUrl: './factures-payees-succes-interface.component.html',
  styleUrls: ['./factures-payees-succes-interface.component.css']
})
export class FacturesPayeesSuccesInterfaceComponent implements OnInit {
  recouvrementSucces:any; facturesP:any;
  age:any;
  dateAssign:any;
  dateFinish:any;
  windowHeight = window.innerHeight;
  rowHeight = 50;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  constructor(public rs:RestService, public route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recouvrementSucces = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.recouvrementSucces.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.recouvrementSucces.createdAt);


      this.dateFinish= this.rs.getMyFormat(this.recouvrementSucces.finishedAt);
      this.facturesP=this.recouvrementSucces.factures;
   });
  }
  download(facture:any){
    this.rs.downloadImage(facture);
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
