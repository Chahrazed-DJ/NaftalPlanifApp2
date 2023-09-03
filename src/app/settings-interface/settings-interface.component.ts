import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { Planificateurs } from '../models/planificateurs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-interface',
  templateUrl: './settings-interface.component.html',
  styleUrls: ['./settings-interface.component.css']
})

export class SettingsInterfaceComponent implements OnInit{
  passwordForm!: FormGroup ;
  incorrectPassword = false;
  ErrorMessage='';
  SamePassword='';
  ClickedBtn=false;
  passChanged=false;
  constructor(public rs:RestService, public route: ActivatedRoute, private formBuilder: FormBuilder) {  
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required] ,// 'password' est le nom du champ dans votre formulaire
      newpassword:['',Validators.required],
      renewpassword:['',Validators.required]
    });
  }
  user:any;
  planificateur!:Planificateurs;
  updatedPlanificateur!:Planificateurs;
  async ngOnInit(): Promise<void> {
   this.user=this.rs.getUser();
   const data = await this.rs.getFireData(this.user.uid);
   this.planificateur=data;
   this.updatedPlanificateur=data;
   
  }
  selectedDiv: number=1;
  
  changer(){
    this.rs.UpdateData(this.user.uid,this.updatedPlanificateur);
  }
  supprimer(){
    this.updatedPlanificateur.image="";
    
  }
  showDiv(divIndex: number) {
    this.selectedDiv = divIndex;
  }
  
  ChangeUserPassword(){
    this.passChanged=false;
    this.ClickedBtn=true;
    const password = this.passwordForm.get('password')!.value;
    const newpassword = this.passwordForm.get('newpassword')!.value;
    const renewpassword = this.passwordForm.get('renewpassword')!.value;
    if(newpassword==renewpassword && newpassword!='')
    {
      if(password!==newpassword)
    {
        this.SamePassword='';
        this.rs.changePassword(password,newpassword).then((value) => { 
          if(value) {
            this.incorrectPassword = true; this.ErrorMessage=''; this.passChanged=true;
          }
        });
    } else this.SamePassword='nouveau mots de passe ressemble au MDP actuel';
    } else this.SamePassword='nouveaux mots de passe saisis pas identiques';
  }
}
