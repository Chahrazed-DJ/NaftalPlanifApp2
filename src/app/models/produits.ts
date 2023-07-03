export class Produits {
        id: string;
        categoryId: string;
        code:number;
        color: string;
        detail: string;
        detail_ar: string;
        id_product:string;
        name: string;
        name_ar:string;
        price: number;
        remiseValue:number;
        icon: any;
       
        constructor( id: string,categoryId: string,code:number,color: string,
                     detail: string, detail_ar: string,id_product:string,name: string,
                     name_ar:string, price: number,remiseValue:number, icon:string){
        this.id=id; this.icon=icon;
        this.categoryId=categoryId; this.code=code;
        this.color=color; this.detail=detail; this.detail_ar=detail_ar;
        this.id_product=id_product; this.name=name;
        this.name_ar=name_ar; this.price=price;
        this.remiseValue=remiseValue;
        }
    
}
