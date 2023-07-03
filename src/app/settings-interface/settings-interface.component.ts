import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { Planificateurs } from '../models/planificateurs';

@Component({
  selector: 'app-settings-interface',
  templateUrl: './settings-interface.component.html',
  styleUrls: ['./settings-interface.component.css']
})
export class SettingsInterfaceComponent implements OnInit{
  constructor(public rs:RestService, public route: ActivatedRoute) {  
  }
  user:any;
  planificateur!:Planificateurs;
  updatedPlanificateur!:Planificateurs;
  async ngOnInit(): Promise<void> {
   this.user=this.rs.getUser();
   const data = await this.rs.getFireData(this.user.uid);
   this.planificateur=data;
   this.updatedPlanificateur=data;
  }
  selectedDiv: number=1;
  
  changer(){
    this.rs.UpdateData(this.user.uid,this.updatedPlanificateur);
  }
  supprimer(){
    this.updatedPlanificateur.image="";
    
  }
  showDiv(divIndex: number) {
    this.selectedDiv = divIndex;
  }
}
