export class Planificateurs {
    adresse: string;
    emploi: string;
    entreprise:string;
    id: string;
    nom: string;
    prenom: string;
    telephone:string;
    image:string;
    constructor(id: string, nom: string,prenom: string,motsdepasse: string,
                emploi: string,email: string,telephone:string,entreprise:string,
                adresse: string, image:string)
                {
                    this.id=id; this.nom=nom; this.prenom=prenom;
                    this.emploi=emploi;
                    this.telephone=telephone;
                    this.entreprise=entreprise; this.adresse=adresse;
                    this.image=image;
                }
}
