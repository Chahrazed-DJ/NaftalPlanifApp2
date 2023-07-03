export class Factures {
    id: string;
    nomclient:  string;
    montant: number;
    datelimite: Date;
    status: string;
    constructor(id:string,nomclient:  string,montant: number, datelimite: Date,status: string){
        this.id=id;
        this.nomclient=nomclient;
        this.montant=montant;
        this.datelimite=datelimite;
        this.status=status;
    }
}
