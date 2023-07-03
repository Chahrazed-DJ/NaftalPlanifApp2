import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-vendu-encours-interface',
  templateUrl: './produit-vendu-encours-interface.component.html',
  styleUrls: ['./produit-vendu-encours-interface.component.css']
})
export class ProduitVenduEncoursInterfaceComponent implements OnInit {
  venteEncours:any;
  age:any;
  dateAssign:any;
  constructor(public rs:RestService ,public route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.venteEncours = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.venteEncours.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.venteEncours.createdAt);

   });
  }

  activeLinkIndices: boolean[] = [true];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
