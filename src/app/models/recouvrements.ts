export class Recouvrements {
        id: string;
        client: string;
        agent: string;
        montant: number;
        status: number;
        constructor( id: string, client: string, agent: string, montant: number, status: number){
        this.id=id;
        this.client=client;
        this.agent=agent;
        this.montant=montant;
        this.status=status;
        }
}
