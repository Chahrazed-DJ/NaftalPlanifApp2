
import {AfterViewInit, Component, OnInit,TemplateRef} from '@angular/core';
import { RestService } from '../rest.service';
import { Clients } from '../models/clients';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-clients-interface',
  templateUrl: './clients-interface.component.html',
  styleUrls: ['./clients-interface.component.css']
})

export class ClientsInterfaceComponent  implements OnInit{
  windowHeight = window.innerHeight;
  rowHeight = 50;
  clients: any[]=[]; 
  Nom:any;
  p:number =1;
  iPerPage: number= Math.floor(this.windowHeight / this.rowHeight);
  formModel: any;
  employes: any[]=[];
  receivedDataEmploye: any;
  EmployeConfirme: any;
  clientUpdate: any;

  constructor(public rs:RestService,private modalService: NgbModal, private http:HttpClient ){}
  ngOnInit(): void {
    
    this.rs.getData("Clients").then((data) => {
      this.clients=data;
     
    });
     
    this.rs.getData("Agents").then((data) => {
      this.employes=data;
    });  
    
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
  
  Search(){
    if(this.Nom==""){
      this.ngOnInit();
    }
    else{
      this.clients=this.clients.filter(res =>{
        return res.client.nom.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());
      })
    }
  }
  key:string = 'id';
  reserve:boolean =false;
  sort(key: string,a: number){
   this.key=key;
   if(a==1)
   this.clients.sort((a, b) => {
    if (a.client[key] < b.client[key]) return -1;
    if (a.client[key] > b.client[key]) return 1;
    return 0;
  });
  else if(a==2)
  this.clients.sort((a, b) => {
    if (a.employee[key] < b.employee[key]) return -1;
    if (a.employee[key] > b.employee[key]) return 1;
    return 0;
  });
  this.reserve=!this.reserve;
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
    this.rs.updateAll("Clients", this.clientUpdate.client.id, this.clientUpdate);
    const nouvVente={
      client: this.clientUpdate.client,
      entreprise: this.clientUpdate.entreprise,
      createdAt: new Date(),
      daira: this.clientUpdate.daira,
      finishedAt: null,
      status:0,
      id: "",
      employee: EmployeConfirme,
    }
    
    const docRef=this.rs.ajouterDoc("Ventes", nouvVente);
    nouvVente.id=(await docRef).id;
    this.rs.updateAll("Ventes",(await docRef).id,nouvVente);
    
    this.clientUpdate.employee.nom=EmployeConfirme.nom;
    this.rs.updateAll("Clients",this.clientUpdate.client.id,this.clientUpdate);

    EmployeConfirme.travailAssigne++;

    this.rs.updateAll("Agents",EmployeConfirme.id,EmployeConfirme);
   
      const url = 'https://fcm.googleapis.com/fcm/send';
      const serverKey = 'AAAAjB_RNiA:APA91bFyKMEQ9JAFi1M_Hsu1vbQFEPA6T1O3oNiczsTOQSdCnelGZ9ay8gN7S-B1RolmIpFLmijFav2rmQg_zeTYX_HcmpXhw93QpjIJZM_Ni0zilNaW95bT_-D5CHOq0RWSvjmMNp5E'; // Remplacez par votre clé de serveur FCM
    
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `key=${serverKey}`
      });
    
      const payload = {
        notification: {
          title: 'Nouvelle opération assignée',
          body: 'vous avez été affecté à une nouvelle opération de vente de l\'id #'+nouvVente.id,
          // Autres propriétés de la notification
        },
        to: EmployeConfirme.token};
    
      this.http.post(url, payload, { headers: headers })
      .subscribe(
        response => {
          console.log('Notification envoyée avec succès', response);
        },
        error => {
          console.error('Erreur lors de l\'envoi de la notification', error);
        }
      );
    
     this.rs.createSubcollection(EmployeConfirme.id,nouvVente.createdAt,nouvVente.id);

    /********************************************************************************************* */
    this.modalService.dismissAll();
    
  }

  ClickedButton(client:Clients){
    this.clientUpdate=client;
  }

}


