import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import {  getAuth,sendPasswordResetEmail,signInWithEmailAndPassword, signOut,updateEmail,updatePassword,updateProfile } from "firebase/auth";
import { CanActivate, Router } from '@angular/router';
import { Planificateurs } from './models/planificateurs';
 
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private firebaseConfig = {
    projectId: 'naftal-6cf5b',
    appId: '1:601829226016:web:bbe44825c512375c02ee45', 
    storageBucket: 'naftal-6cf5b.appspot.com',
    apiKey: 'AIzaSyB4eVPsEn6LvbHj6IPysijhtIRSpgnR41s',
    authDomain: 'naftal-6cf5b.firebaseapp.com',
    messagingSenderId: '601829226016',
    measurementId: 'G-BCH4RBHEL2',
  };
  private app = initializeApp(this.firebaseConfig);
  private userInfo:any;
  constructor(private router: Router) { }

  getUser(){
    return this.userInfo;
  }
  seConnecter(useremail:string, password:string):any{
    const auth = getAuth(this.app);
      signInWithEmailAndPassword(auth, useremail, password)
      .then(async (userCredential) => {
        const user= userCredential.user;
        this.userInfo= userCredential.user;
        if( await this.verifierPlanifcateur(user.uid))
        this.router.navigate(['sidebar'],{ queryParams: user});
        else 
        alert('Compte n\'a pas accès à ce service');
      })
      .catch((error) => {
        if(useremail!=''&& password!='')
        alert('Email ou Mots de passe incorrect');
      });
  }



  deconnecter(){
  this.userInfo=null;
   const auth = getAuth(this.app);
   signOut(auth).then(() => {
    this.router.navigate(['']);
    console.log('succès');
   }).catch((error) => {
    console.log('error')
  });
  }


  planificateur!:Planificateurs;
  async getFireData(uid:string): Promise<Planificateurs> {
    const firestore = getFirestore(this.app);
    const ref = doc(firestore, "Planificateur", uid);
    const docSnap = await getDoc(ref);
    this.planificateur=<Planificateurs>docSnap.data();
    return this.planificateur;
  }

  async UpdateData(uid:string,planif:Planificateurs){
      const firestore = getFirestore(this.app);
      const frankDocRef = doc(firestore, "Planificateur", uid);
      await updateDoc(frankDocRef, {
        "nom":planif.nom,
        "prenom": planif.prenom,
        "image": planif.image,
        "entreprise":planif.entreprise,
        "adresse":planif.adresse,
        "emploi":planif.emploi,
        "telephone":planif.telephone
    });
    alert('les données sont modifiées');
    }

    async createSubcollection(id:any,dateC:any,idOp:any) {
      const parentCollectionId = id; // Remplacez par l'ID de la collection parent
      const subcollectionName = 'Notifications'; // Remplacez par le nom de votre sous-collection
    
      const firestore = getFirestore(this.app);
      const parentCollectionRef = doc(firestore, 'Agents', parentCollectionId);
      const subcollectionRef = collection(parentCollectionRef, subcollectionName);
    
      let nouvNotification={
        createdAt:dateC,
        id:"",
        idOperation: idOp
      };
      const docRef = await addDoc(subcollectionRef, nouvNotification)
      nouvNotification.id=(await docRef).id;
      this.updateSubcollectionDocument(parentCollectionId,(await docRef).id,nouvNotification)
    }

    updateSubcollectionDocument(idAgent:any,idDoc:any,nouvNotification:any) {
      const parentCollectionId = idAgent; // Remplacez par l'ID de la collection parent
      const subcollectionName = 'Notifications'; // Remplacez par le nom de votre sous-collection
      const documentId = idDoc; // Remplacez par l'ID du document à mettre à jour
    
      const firestore = getFirestore(this.app);
      const parentCollectionRef = doc(firestore, 'Agents', parentCollectionId);
      const subcollectionRef = collection(parentCollectionRef, subcollectionName);
      const documentRef = doc(subcollectionRef, documentId);
    
      updateDoc(documentRef, {
       id: idDoc,
       createdAt: nouvNotification.createdAt,
       idOperation:  nouvNotification.idOperation
      })
      
    }
    


  async ajouterDoc(collectionN:any,operation:any){
    const db = getFirestore(this.app);
    const docRef = await addDoc(collection(db, collectionN), operation);
    return docRef;
  }

  async getElements(collectionN:any,attribut:any, condition:any){
    const data: any[]=[]
    const db = getFirestore(this.app);
    const q = query(collection(db, collectionN), where(attribut, "==", condition));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     data.push( doc.data());
    });
    return data;
  }

  async updateAll(collectionN:any, condition:any,deb:any){
    const db = getFirestore(this.app);
    const washingtonRef = doc(db, collectionN, condition);
      await updateDoc(washingtonRef, deb);
  }


  async verifierPlanifcateur(uid:string): Promise<boolean>{
    let b=false;
    const firestore =getFirestore(this.app);
    const ref = doc(firestore, "Planificateur", uid);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) 
      b=true;

    return b;
  }


    sendPasswordEmail(email:string):any{
    if(email!='')
    {
      const auth = getAuth(this.app);
      sendPasswordResetEmail(auth, email)
      .then(() => {
     }).catch((error)=> {
      return 'Adresse email non valide !';
     }
     )
     return 'h';
    }
    else return 'Votre adresse email, SVP!';
    }
  
   async getData(collectionName:string){
    let data: any[]=[];
    const firestore = getFirestore(this.app);
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    querySnapshot.forEach((doc) => {
      data.push( doc.data() );
    });
    return data;
   }


   async getDataWithId(id:string, table:string){
    const firestore =getFirestore(this.app);
    const ref = doc(firestore, table, id);
    const docSnap = await getDoc(ref);
    return docSnap.data();
  }
  
  downloadImage(data:any): void {
    const imageUrl = data.document;
    const fileName= 'Cheque.jpg';
    fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      // Créer un objet URL à partir du blob
      const url = URL.createObjectURL(blob);

      // Créer un lien de téléchargement
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      // Ajouter le lien à la page et déclencher le téléchargement
      document.body.appendChild(link);
      link.click();

      // Nettoyer l'objet URL et supprimer le lien
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    });
  }

getMyFormat(d:any){
  const dateA = new Date(d.seconds*1000);
  const dateB=`${dateA.getDate()}/${dateA.getMonth()+1}/${dateA.getFullYear()}`;
  return dateB; 
}

canActivate(): boolean {
  if (this.userInfo.uid!=null) {
    return true;
  } else {
    this.router.navigate(['']);
    return false;
  }
}
 async changePassword(psw:any,newpsw:any):Promise<boolean>{
  let passCorrect : boolean =false;
  const auth = getAuth(this.app);
  await signInWithEmailAndPassword(auth, this.userInfo.email, psw)
  .then(async (userCredential) => {
    passCorrect= true;
    updatePassword(userCredential.user, newpsw).then(() => {
      console.log('updated');
    }).catch((error) => {passCorrect= false;});
  }).catch((error) =>{ passCorrect= false;})
  return passCorrect;
 }
}


