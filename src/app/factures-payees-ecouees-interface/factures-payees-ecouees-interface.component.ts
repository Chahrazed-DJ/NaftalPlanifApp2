import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factures-payees-ecouees-interface',
  templateUrl: './factures-payees-ecouees-interface.component.html',
  styleUrls: ['./factures-payees-ecouees-interface.component.css']
})
export class FacturesPayeesEcoueesInterfaceComponent implements OnInit {
  recouvrementEchoue:any;
  age:any;
  dateAssign:any;
  dateFinish:any;
  constructor(public rs:RestService,public route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.recouvrementEchoue = JSON.parse(params['data']);
      this.age= new Date().getFullYear()- new Date(this.recouvrementEchoue.employee.dateNaissance.seconds*1000).getFullYear();
      this.dateAssign = this.rs.getMyFormat(this.recouvrementEchoue.createdAt);


      this.dateFinish= this.rs.getMyFormat(this.recouvrementEchoue.finishedAt);
   });
  }

  activeLinkIndices: boolean[] = [true];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
