export class Debiteurs {
        id: string;
        nom: string;
        entreprise: string;
        nbfactures: number;
        montant: number;
        nomagent: string;
        status: string;
        assign: boolean;
        dateassign:Date;
        constructor( id: string, nom: string,entreprise: string,nbfactures: number, montant: number,
                     nomagent: string, status: string, assign:boolean, dateassign:Date){
        this.id=id;
        this.nom=nom;
        this.entreprise=entreprise;
        this.nbfactures=nbfactures;
        this.montant=montant;
        this.nomagent=nomagent;
        this.status=status;
        this.assign=assign;
        this.dateassign=dateassign;
        }
    
}
