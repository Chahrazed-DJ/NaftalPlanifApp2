import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { ClientsInterfaceComponent } from './clients-interface/clients-interface.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EmployesInterfaceComponent } from './employes-interface/employes-interface.component';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';
import { FacturesInterfaceComponent } from './factures-interface/factures-interface.component';
import { VentesInterfaceComponent } from './ventes-interface/ventes-interface.component';
import { ProduitsInterfaceComponent } from './produits-interface/produits-interface.component';
import { SettingsInterfaceComponent } from './settings-interface/settings-interface.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { CreancesClientsInterfaceComponent } from './creances-clients-interface/creances-clients-interface.component';
import { DebiteursInterfaceComponent } from './debiteurs-interface/debiteurs-interface.component';
import { OperationsInterfaceComponent } from './operations-interface/operations-interface.component';
import { RecouvrementsInterfaceComponent } from './recouvrements-interface/recouvrements-interface.component';
import { ProduitVenduInterfaceComponent } from './produit-vendu-succes-interface/produit-vendu-succes-interface.component';
import { DatePipe } from '@angular/common';
import { ProduitVenduEncoursInterfaceComponent } from './produit-vendu-encours-interface/produit-vendu-encours-interface.component';
import { ProduitVenduEchoueInterfaceComponent } from './produit-vendu-echoue-interface/produit-vendu-echoue-interface.component';
import { FacturesPayeesSuccesInterfaceComponent } from './factures-payees-succes-interface/factures-payees-succes-interface.component';
import { FacturesPayeesEncoursInterfaceComponent } from './factures-payees-encours-interface/factures-payees-encours-interface.component';
import { FacturesPayeesEcoueesInterfaceComponent } from './factures-payees-ecouees-interface/factures-payees-ecouees-interface.component';
import { EmployeProfilInterfaceComponent } from './employe-profil-interface/employe-profil-interface.component';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationBarComponent,
    ClientsInterfaceComponent,
    EmployesInterfaceComponent,
    DashboardInterfaceComponent,
    FacturesInterfaceComponent,
    VentesInterfaceComponent,
    ProduitsInterfaceComponent,
    SettingsInterfaceComponent,
    CreancesClientsInterfaceComponent,
    DebiteursInterfaceComponent,
    OperationsInterfaceComponent,
    RecouvrementsInterfaceComponent,
    ProduitVenduInterfaceComponent,
    ProduitVenduEncoursInterfaceComponent,
    ProduitVenduEchoueInterfaceComponent,
    FacturesPayeesSuccesInterfaceComponent,
    FacturesPayeesEncoursInterfaceComponent,
    FacturesPayeesEcoueesInterfaceComponent,
    EmployeProfilInterfaceComponent,
    LoginInterfaceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgApexchartsModule,
    Ng2OrderModule ,
    NgxPaginationModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
    
  ],
  providers: [DatePipe, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
