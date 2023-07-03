export class Ventes {
        client: any;
        createdAt: any;
        daira:string;
        employee: any;
        entreprise:any;
        id: string;
        produits:any;
        finishedAt:any;
        status: number;
        constructor(  id: string,client: any, createdAt: any,
                      daira:string,employee: any,entreprise:any,
                      finishedAt:any,status: number){
        this.id=id; this.createdAt=createdAt;
        this.client=client; this.daira=daira;
        this.employee=employee; this.entreprise=entreprise;
        this.finishedAt=finishedAt;
        this.status=status;
        }
    
}
