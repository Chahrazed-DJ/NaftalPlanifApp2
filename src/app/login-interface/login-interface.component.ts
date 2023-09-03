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
  emptyEmail= false;
  password:string= '';
  emptyPassword=false;
  emailSent=false;
  errorMessage='';
  constructor(public rs:RestService) { }
  ngOnInit(): void {
  }


  login(){
    this.errorMessage='';
    this.emailSent=false;
    if(this.email=='')
    { this.emptyEmail=true; this.errorMessage='Entrez votre email et votre mots de passe'}
    
    if(this.password=='')
    { this.emptyPassword=true; this.errorMessage='Entrez votre email et votre mots de passe'}
      this.rs.seConnecter(this.email,this.password);

    this.email='';
    this.password='';
  }


  sendEmail(){
    this.errorMessage=this.rs.sendPasswordEmail(this.email);
    if (this.errorMessage=='h') this.emailSent=true;
  }

}
