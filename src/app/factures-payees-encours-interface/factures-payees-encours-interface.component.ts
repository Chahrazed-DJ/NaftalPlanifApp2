import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factures-payees-encours-interface',
  templateUrl: './factures-payees-encours-interface.component.html',
  styleUrls: ['./factures-payees-encours-interface.component.css']
})
export class FacturesPayeesEncoursInterfaceComponent implements OnInit {
  recouvrementEchoue:any;
  age:any;
  dateAssign:any;
  constructor(public rs:RestService, public route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recouvrementEchoue = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.recouvrementEchoue.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.recouvrementEchoue.createdAt);    
   });
  }

  activeLinkIndices: boolean[] = [true];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
