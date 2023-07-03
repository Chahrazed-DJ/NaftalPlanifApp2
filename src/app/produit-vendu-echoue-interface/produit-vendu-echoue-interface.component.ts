import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventes } from '../models/ventes';
import { Clients } from '../models/clients';

@Component({
  selector: 'app-produit-vendu-echoue-interface',
  templateUrl: './produit-vendu-echoue-interface.component.html',
  styleUrls: ['./produit-vendu-echoue-interface.component.css']
})
export class ProduitVenduEchoueInterfaceComponent implements OnInit {
  venteEchoue:any;
  age:any;
  dateAssign:any;
  dateFinish:any;
  constructor(public rs:RestService,public route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.venteEchoue = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.venteEchoue.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.venteEchoue.createdAt);
      
      this.dateFinish= this.rs.getMyFormat(this.venteEchoue.finishedAt);
   });
  }

  activeLinkIndices: boolean[] = [true];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
