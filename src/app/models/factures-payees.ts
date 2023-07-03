export class FacturesPayees {
    id:string;
    montant: number;
    montantpayé:number;
    moyendepayement: string;
    document:string;
    constructor(id:string, montant: number, montantpayé:number,moyendepayement: string,document:string){
        this.id=id;
        this.montant=montant;
        this.montantpayé=montantpayé;
        this.moyendepayement=moyendepayement;
        this.document=document;
    }
}
