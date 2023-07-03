export class Employes {
    id: string;
    image: string;
    firstname: string;
    contact: string;
    email : string;
    recouvrements: number;
    ventes:number;
    Travail_acheve: number;
    Travail_assigne: number;
    isActif: boolean;
    constructor(id: string, image: string, firstname: string, contact: string,email: string,
             recouvrement: number,ventes:number,Travail_acheve: number,Travail_assigne: number, isActif: boolean){
        this.id=id;
        this.image=image;
        this.firstname=firstname;
        this.contact=contact;
        this.email=email;
        this.recouvrements=recouvrement;
        this.ventes=ventes;
        this.Travail_acheve= recouvrement+ventes;
        this.Travail_assigne=Travail_assigne;
        this.isActif=isActif;
    }
}
