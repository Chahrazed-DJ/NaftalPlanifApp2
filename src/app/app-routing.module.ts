import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsInterfaceComponent } from './clients-interface/clients-interface.component';
import { EmployesInterfaceComponent } from './employes-interface/employes-interface.component';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';
import { FacturesInterfaceComponent } from './factures-interface/factures-interface.component';
import { VentesInterfaceComponent } from './ventes-interface/ventes-interface.component';
import { ProduitsInterfaceComponent } from './produits-interface/produits-interface.component';
import { SettingsInterfaceComponent } from './settings-interface/settings-interface.component';
import { CreancesClientsInterfaceComponent } from './creances-clients-interface/creances-clients-interface.component';
import { DebiteursInterfaceComponent } from './debiteurs-interface/debiteurs-interface.component';
import { OperationsInterfaceComponent } from './operations-interface/operations-interface.component';
import { RecouvrementsInterfaceComponent } from './recouvrements-interface/recouvrements-interface.component';
import { ProduitVenduInterfaceComponent } from './produit-vendu-succes-interface/produit-vendu-succes-interface.component';
import { ProduitVenduEncoursInterfaceComponent } from './produit-vendu-encours-interface/produit-vendu-encours-interface.component';
import { ProduitVenduEchoueInterfaceComponent } from './produit-vendu-echoue-interface/produit-vendu-echoue-interface.component';
import { FacturesPayeesSuccesInterfaceComponent } from './factures-payees-succes-interface/factures-payees-succes-interface.component';
import { FacturesPayeesEncoursInterfaceComponent } from './factures-payees-encours-interface/factures-payees-encours-interface.component';
import { FacturesPayeesEcoueesInterfaceComponent } from './factures-payees-ecouees-interface/factures-payees-ecouees-interface.component';
import { EmployeProfilInterfaceComponent } from './employe-profil-interface/employe-profil-interface.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { RestService } from './rest.service';

const routes: Routes = [
  {path:'',component: LoginInterfaceComponent},
  { path: 'sidebar',component:  SideNavigationBarComponent, canActivate:[RestService],
  children:[
  { path: '',component:  DashboardInterfaceComponent},
  { path: 'dashboard',component:  DashboardInterfaceComponent},
  { path: 'clients', component: ClientsInterfaceComponent},

  { path: 'employes',component:  EmployesInterfaceComponent},
  { path: 'employeprofil',component:  EmployeProfilInterfaceComponent},
  

  { path: 'creancesClient',component:  CreancesClientsInterfaceComponent,
  children: [
    { path: 'factures',component:  FacturesInterfaceComponent},
    { path: 'debiteurs', component:DebiteursInterfaceComponent},
    { path: '', component: DebiteursInterfaceComponent},
  ]},
  { path: 'operations',component: OperationsInterfaceComponent,
  children: [
    { path: 'ventes',component:  VentesInterfaceComponent},
    { path: 'recouvrements', component: RecouvrementsInterfaceComponent},
    { path: '',component:  VentesInterfaceComponent},
   ]
  },
  {path: 'produitvendusucces', component: ProduitVenduInterfaceComponent},
  {path: 'produitvenduencours', component: ProduitVenduEncoursInterfaceComponent},
  {path: 'produitvenduechoue', component: ProduitVenduEchoueInterfaceComponent},

  {path: 'facturespayeessucces', component: FacturesPayeesSuccesInterfaceComponent},
  {path: 'facturespayeesencours', component: FacturesPayeesEncoursInterfaceComponent},
  {path: 'facturespayeesechoue', component: FacturesPayeesEcoueesInterfaceComponent},

  { path: 'produits',component:   ProduitsInterfaceComponent },
  { path: 'settings',component:  SettingsInterfaceComponent }
  ]
  },
  
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
