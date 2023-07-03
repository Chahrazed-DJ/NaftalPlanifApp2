import {AfterViewInit, Component, OnInit,TemplateRef} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-operations-interface',
  templateUrl: './operations-interface.component.html',
  styleUrls: ['./operations-interface.component.css']
})
export class OperationsInterfaceComponent implements OnInit{
  constructor(public rs:RestService,private router: Router, public route:ActivatedRoute){}
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
