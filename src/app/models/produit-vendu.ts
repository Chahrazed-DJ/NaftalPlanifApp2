export class ProduitVendu {
    id:string;
    produit: string;
    prix:number;
    vendu: number;
    remise: number;
    quantite: number;
    constructor(id:string, produit: string,prix:number,vendu: number,remise: number,quantite: number){
        this.id=id;
        this.produit=produit;  
        this.prix=prix;
        this.vendu=vendu;
        this.remise=remise;
        this.quantite=quantite;
     }
}
