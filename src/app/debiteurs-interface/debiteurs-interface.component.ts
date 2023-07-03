import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employes } from '../models/employes';
import { RestService } from '../rest.service';
import { Debiteurs } from '../models/debiteurs';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-debiteurs-interface',
  templateUrl: './debiteurs-interface.component.html',
  styleUrls: ['./debiteurs-interface.component.css']
})
export class DebiteursInterfaceComponent implements OnInit{
  windowHeight = window.innerHeight;
  rowHeight = 50;
  debiteurs: any[]=[]; montantsCalcules: number[] = [];
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  formModel: any;
  employes: any[]=[];
  receivedDataEmploye: any;

  clientUpdate: any;
  Nom:any;
  constructor(public rs:RestService,private modalService: NgbModal,
              ){}
  ngOnInit(): void {
    
    this.rs.getData("Debiteurs").then((data) => {
      this.debiteurs=data;
      this.debiteurs.map(deb => {
          this.montantsCalcules.push(this.calculMontant(deb));
      });
    });
    
    this.rs.getData("Agents").then((data) => {
      this.employes=data;
    });  
    }




    Search(){
      if(this.Nom==""){
        this.ngOnInit();
      }
      else{
        this.debiteurs=this.debiteurs.filter(res =>{
          return res.client.nom.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());
        })
      }
    }

    getRows(): any[][] {
      const rows: any[][] = [];
      let currentRow: any[] = [];
    
      for (let i = 0; i < this.employes.length; i++) {
        currentRow.push(this.employes[i]);
    
        if ((i + 1) % 3 === 0 || i === this.employes.length - 1) {
          rows.push(currentRow);
          currentRow = [];
        }
      }
    
      return rows;
    }
    
    openModal(myModal: TemplateRef<any>) {
      const modalRef = this.modalService.open(myModal, {
        windowClass: 'modal-lg'
                })
                
    }
    key:string = 'id';
  reserve:boolean =false;
  sort(key: string, a: number) {
    this.key = key;
    let compareFunction: (a: any, b: any) => number;
  
    if (a === 1) {
      compareFunction = (a, b) => (a.client[key] < b.client[key]) ? -1 : ((a.client[key] > b.client[key]) ? 1 : 0);
    } else if (a === 2) {
      compareFunction = (a, b) => (a.entreprise[key] < b.entreprise[key]) ? -1 : ((a.entreprise[key] > b.entreprise[key]) ? 1 : 0);
    } else if (a === 3) {
      compareFunction = (a, b) => (a.factures.length < b.factures.length) ? -1 : ((a.factures.length > b.factures.length) ? 1 : 0);
    } else {
      return; 
    }
  
    this.debiteurs.sort(compareFunction);
    this.reserve = !this.reserve;
  }
  
  
  cardClickOpenModal2(agent:any,myModal2: TemplateRef<any>){
    const modalRef = this.modalService.open(myModal2, {
      windowClass: 'modal-dialog-centered'
              })
      this.receivedDataEmploye= agent;
      //modalRef.componentInstance.receivedData = this.receivedDataEmploye;
  }
 
   async closeAllModals(EmployeConfirme:any): Promise<void> {
    this.clientUpdate.status=true;
    this.rs.updateAll("Debiteurs", this.clientUpdate.client.id, this.clientUpdate);
    const nouvRecouvrement={
      client: this.clientUpdate.client,
      entreprise: this.clientUpdate.entreprise,
      factures: this.clientUpdate.factures,
      createdAt: new Date(),
      finishedAt: null,
      status:0,
      id: "",
      employee: EmployeConfirme,
    }
    const docRef=this.rs.ajouterDoc("Recouvrement", nouvRecouvrement);
    nouvRecouvrement.id=(await docRef).id;
    this.rs.updateAll("Recouvrement",(await docRef).id,nouvRecouvrement);
    
    this.clientUpdate.employee.nom=EmployeConfirme.nom;
    this.rs.updateAll("Debiteurs",this.clientUpdate.client.id,this.clientUpdate);

    EmployeConfirme.travailAssigne++;
    this.rs.updateAll("Agents",EmployeConfirme.id,EmployeConfirme);

    this.modalService.dismissAll();

    //EmployeConfirme.Travail_assigne++;

  }

  ClickedButton(debiteur:Debiteurs){
    this.clientUpdate=debiteur;
  }
      calculMontant(deb:any): number{
        let a:number=0;    
        for (let i = 0; i < deb.factures.length; i++) 
        { const item = deb.factures[i];
          a=a+item.montant;
        }
    return a;
    }
}
