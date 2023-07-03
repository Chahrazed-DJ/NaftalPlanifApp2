import {AfterViewInit, Component, OnInit,TemplateRef} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creances-clients-interface',
  templateUrl: './creances-clients-interface.component.html',
  styleUrls: ['./creances-clients-interface.component.css']
})
export class CreancesClientsInterfaceComponent implements OnInit{
  constructor(public rs:RestService,private router: Router, public route : ActivatedRoute){}
  ngOnInit(): void {
    
    }
    
   
  onChangePage(page:string ){
    this.router.navigate([page]);
  }
  activeLinkIndices: boolean[] = [true, false];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
}
