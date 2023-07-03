import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit{

  email: string='';
  password:string= '';
  constructor(public rs:RestService) { }
  ngOnInit(): void {
  }


  login(){
    if(this.email=='')
    alert('entrer votre adresse email');
    
    if(this.password=='')
    alert('entrer votre mots de passe');
    
    this.rs.seConnecter(this.email,this.password);

    this.email='';
    this.password='';
  }


  sendEmail(){
    this.rs.sendPasswordEmail(this.email);
  }

}
