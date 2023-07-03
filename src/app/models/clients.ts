export class Clients {
    id: string;
    nom: string;
    entreprise: string;
    nomagent: string;
    status: string;
    assign: boolean;
    dateassign: Date;
    constructor( id: string, nom: string,entreprise: string,nomagent: string, status: string, assign:boolean,dateassign:Date){
    this.id=id;
    this.nom=nom;
    this.entreprise=entreprise;
    this.nomagent=nomagent;
    this.status=status;
    this.assign=assign;
    this.dateassign=dateassign;
    }
}
